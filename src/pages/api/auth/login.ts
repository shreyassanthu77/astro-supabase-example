import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ redirect }) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitter",
    options: {
      redirectTo: import.meta.env.TWITTER_CALLBACK_URL,
    },
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect(data.url);
};
