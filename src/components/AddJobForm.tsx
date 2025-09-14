'use client';
import { use, useState } from "react";

export default function AddJobForm() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [remote, setRemote] = useState(false);
    const [status, setStatus] = useState<null | string>(null);

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("Saving...");
        const res = await fetch("/api/jops", {
            method: "POST",
            headers: { "Content-Type": "applicaton/json" },
            body: JSON.stringify({ title, company, remote })
        });
        if (!res.ok) {
            const { error } = await res.json().catch(() => ({ error: "Unknown Error" }));
            setStatus(`Failed: ${error}`);
            return;
        }
        setTitle(""); setCompany(""); setRemote(false);
        setStatus("Saved ✅");
        // simple refresh to re-run server fetch on the page
        window.location.reload();
    }
    return (
        <form onSubmit={submit} style={{ marginTop: 24, display: "grid", gap: 8, maxWidth: 420 }}>
            <input
                placeholder="Job title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
            />
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input type="checkbox" checked={remote} onChange={(e) => setRemote(e.target.checked)} />
                Remote
            </label>
            <button type="submit">Add Job</button>
            {status && <small>{status}</small>}
        </form>
    );
}