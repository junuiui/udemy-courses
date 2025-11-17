import Link from "next/link";

// @ - refers to Root in NextJS
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About</Link></p>
    </main>
  );
}

