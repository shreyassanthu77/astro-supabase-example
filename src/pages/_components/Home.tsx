import { supabase } from "@/lib/supabase/supabase";
import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export function HomePage() {
  let [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  return (
    <>
      <h1>Hello, {user?.user_metadata.name ?? "loading..."}!</h1>
      <a href="/api/auth/logout">Logout</a>
    </>
  );
}
