import { NextResponse } from "next/server";
import { supabaseServer } from "@root/lib/supabase/server";
import { error } from "console";

export async function POST(req: Request) {
    const db = supabaseServer();
    const body = await req.json(); // {title, company, remote }

    //naive validation (upgrade to zod required for later)
    const { title, company, remote = false } = body ?? {};
    if (!title || !company) {
        return NextResponse.json({ error: "title and company required" }, { status: 400 });
    }

    const { data, error } = await db
        .from("jobs")
        .insert({ title, company, remote })
        .select("id, title, company, remote, created_at")
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ job: data }, { status: 201 });
}
