'use client' // 👈 this tells Next.js "this component runs in the browser"

import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0); // React hook: remember a number

    return (
        <button
            onClick={() => setCount(count + 1)}
            style={{
                padding: "8px 12px",
                background: "skyblue",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
            }}
        >
            Count: {count}
        </button>
    );
}
