import { createClient } from "@supabase/supabase-js";
// this function build supabase client instance

export function supabaseServer() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    );
}


// ^ wrap in a function so you call it inside server components/route handlers.
// This client can bypass RLS if configured — keep it OFF the client at all costs