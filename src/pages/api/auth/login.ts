import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect, locals }) => {
  const { supabase } = locals;
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
