import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect, locals, cookies }) => {
  const { supabase } = locals;
  if (!locals.user) {
    return redirect("/");
  }
  const { error } = await supabase.auth.signOut();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  cookies.delete("sb-access-token", {
    path: "/",
    secure: true,
    httpOnly: true,
  });
  cookies.delete("sb-refresh-token", {
    path: "/",
    secure: true,
    httpOnly: true,
  });

  return redirect("/");
};
