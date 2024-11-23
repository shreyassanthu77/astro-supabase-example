import { defineMiddleware, sequence } from "astro:middleware";
import { createServerClient, parseCookieHeader } from "@supabase/ssr";

export const auth = defineMiddleware(
  async ({ locals, request, cookies }, next) => {
    const supabase = createServerClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return parseCookieHeader(request.headers.get("Cookie") ?? "");
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookies.set(name, value, options);
            });
          },
        },
      },
    );

    locals.supabase = supabase;

    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error || !session) {
      return next();
    }
    locals.session = session;
    locals.user = session.user;

    return next();
  },
);

export const onRequest = sequence(auth);
