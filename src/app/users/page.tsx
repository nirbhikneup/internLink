// app/users/page.tsx
import { Counter } from "@/components/counter";

export default function UsersPage() {
    return (
        <section>
            <h1>Users Page</h1>
            <ul>
                <li>Alice</li>
                <li>Bob</li>
                <li>Charlie</li>
            </ul>

            {/* only this part is interactive */}
            <Counter />
        </section>
    );
}

