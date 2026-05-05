/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CF_ANALYTICS_TOKEN?: string;
  readonly PUBLIC_TALLY_FORM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
