
export default async function DebugSupaPage() {
    const { supabaseServer } = await import("@root/lib/supabase/server");
    const db = supabaseServer(); // constrcut client with secret key (server only)

    return (
        <main style={{ padding: 12 }}>
            <h1>Supabase wiring looks good ✅</h1>
            <p>If this renders, envs + clients are set.</p>
        </main>
    )
}