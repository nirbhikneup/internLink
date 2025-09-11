import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 12, borderBottom: "1px solid #eee" }}>
          <nav style={{ display: "flex", gap: 12 }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main style={{ padding: 12 }}>{children}</main>
        <footer style={{ padding: 12, borderTop: "1px solid #eee", fontSize: 12 }}>
          © {new Date().getFullYear()} InternLink
        </footer>
      </body>
    </html>
  );
}
