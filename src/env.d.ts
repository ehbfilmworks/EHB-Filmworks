/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CF_ANALYTICS_TOKEN?: string;
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
