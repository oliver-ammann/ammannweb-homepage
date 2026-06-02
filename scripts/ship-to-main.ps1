# develop → commit (optional) → push → open/update PR to main
# Usage:
#   npm run ship -- "fix: pricing copy"
#   npm run ship -- --skip-commit          # push only, PR
#   npm run ship -- "feat: x" --draft

param(
  [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
  [string[]]$Args
)

$ErrorActionPreference = "Stop"

$Message = $null
$SkipCommit = $false
$Draft = $false
$Build = $false

foreach ($arg in $Args) {
  switch ($arg) {
    "--skip-commit" { $SkipCommit = $true }
    "--draft" { $Draft = $true }
    "--build" { $Build = $true }
    default {
      if ($null -eq $Message) { $Message = $arg }
    }
  }
}

function Require-Command($name) {
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
    throw "Missing '$name' on PATH. Install it and retry."
  }
}

Require-Command git
Require-Command gh

$root = git rev-parse --show-toplevel 2>$null
if (-not $root) { throw "Not inside a git repository." }
Set-Location $root

$branch = (git branch --show-current).Trim()
if ($branch -ne "develop") {
  throw "Current branch is '$branch'. Checkout develop first: git checkout develop"
}

function Test-GitDirty {
  git diff --quiet 2>$null
  $unstaged = $LASTEXITCODE -ne 0
  git diff --cached --quiet 2>$null
  $staged = $LASTEXITCODE -ne 0
  return $unstaged -or $staged
}

$dirty = Test-GitDirty

if ($dirty -and -not $SkipCommit) {
  if ([string]::IsNullOrWhiteSpace($Message)) {
    throw @"
Uncommitted changes. Pass a commit message:
  npm run ship -- "your message here"
Or push without committing:
  npm run ship -- --skip-commit
"@
  }
  git add -A
  git commit -m $Message
  Write-Host "Committed on develop." -ForegroundColor Green
}
elseif ($dirty -and $SkipCommit) {
  throw "Working tree has uncommitted changes. Commit or stash before --skip-commit push."
}

if ($Build) {
  Write-Host "Running npm run build..." -ForegroundColor Cyan
  npm run build
  if ($LASTEXITCODE -ne 0) { throw "npm run build failed." }
}

Write-Host "Pulling origin/develop..." -ForegroundColor Cyan
git pull --rebase origin develop

Write-Host "Pushing origin/develop..." -ForegroundColor Cyan
git push -u origin develop

$existing = gh pr list --base main --head develop --state open --json url,number -q ".[0].url" 2>$null
if ($existing) {
  Write-Host "PR already open: $existing" -ForegroundColor Yellow
  gh pr view --web 2>$null | Out-Null
  exit 0
}

$prArgs = @(
  "pr", "create",
  "--base", "main",
  "--head", "develop",
  "--fill"
)
if ($Draft) { $prArgs += "--draft" }

Write-Host "Creating PR develop → main..." -ForegroundColor Cyan
& gh @prArgs

$url = gh pr list --base main --head develop --state open --json url -q ".[0].url"
if ($url) {
  Write-Host "PR: $url" -ForegroundColor Green
}
