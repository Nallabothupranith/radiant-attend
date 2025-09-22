import { useSession, useUser } from "@clerk/clerk-react"
import { createClient } from "@supabase/supabase-js";

const useClerkSupabaseClient = () => {
  const { user } = useUser();
  const { session } = useSession();

  const createClerkSupabaseClient = ()=>{
    return createClient(
        process.env.VITE_SUPABASE_URL!,
        process.env.VITE_SUPABASE_PUBLISHABLE_KEY!,
        {
          async accessToken() {
            return session?.getToken() ?? null
          },
        },
      )

  }

  return { user, session, createClerkSupabaseClient };
}