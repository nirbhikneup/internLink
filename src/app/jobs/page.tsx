import { supabaseServer } from "@root/lib/supabase/server";

type Job = {
    id: number;
    title: string;
    company: string;
    remote: boolean;
    created_at: string;
};

export default async function JobsPage() {
    const db = supabaseServer();

    const { data, error } = await db
        .from("jobs")
        .select("id, title, company, remote, created_at")
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <main style={{ padding: 12 }}>
                <h1> Jobs </h1>
                <p style={{ color: "crimson" }}> Failed to load jobs: {error.message}</p>
            </main>
        );
    }

    const jobs = (data ?? []) as Job[];

    return (
        <main style={{ padding: 12 }}>
            <h1>Jobs</h1>
            <ul style={{ marginTop: 12 }}>
                {jobs.map((j) => (
                    <li key={j.id} style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
                        <div><b>{j.title}</b> - {j.company}</div>
                        <small> {j.remote ? "Remote ✅" : "On-Site"}</small>
                    </li>
                ))}
            </ul>
        </main>
    )
}