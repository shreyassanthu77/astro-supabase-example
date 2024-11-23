/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    user: import("@supabase/supabase-js").User | null;
  }
}

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly TWITTER_CALLBACK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
