---
description: Commit on develop, push, open PR to main (Vercel production path)
argument-hint: [optional commit message]
---

# Ship — develop → PR → main

Run this workflow end-to-end in **ammannweb**. Do not ask for confirmation unless blocked.

## When the user provides text after `/ship`, use it as the commit message. Otherwise draft a short imperative message from the diff.

## Steps

1. Branch must be **`develop`**.
2. **`npm run build`** — stop on failure.
3. Commit all changes if dirty (`git add -A`, `git commit -m "..."`).
4. `git pull --rebase origin develop` → `git push -u origin develop`
5. Open or surface existing PR: `develop` → `main` via `gh pr create --fill` or list existing.
6. Return PR URL; remind to merge when CI is green.

## Rules

- Never push to `main`, never force-push, never skip hooks.
- This command is explicit permission to commit and push.
