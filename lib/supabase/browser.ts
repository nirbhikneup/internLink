import { createClient } from "@supabase/supabase-js";
// imports the function that builds a supabase client instance

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // SAFE TO EXPOSE TO BROWSER
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // public annon key for read/auth
);

// here we are constructing a browser-safe client using only public env vars.
// The `!` tells TS "these exist"; make sure `.env.local` is set.