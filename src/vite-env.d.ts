/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_THREEMA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
