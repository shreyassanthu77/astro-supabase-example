/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    session: import("@supabase/supabase-js").Session | null;
    user: import("@supabase/supabase-js").User | null;
    supabase: import("@supabase/supabase-js").SupabaseClient<
      any,
      "public",
      any
    >;
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly TWITTER_CALLBACK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
