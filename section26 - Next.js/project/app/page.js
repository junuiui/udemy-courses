import Link from "next/link";

export default function Home() {
  console.log("Home Page Loaded")
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        <p><Link href='/meals'>meals</Link></p>
        <p><Link href='/meals/share'>Meal Share</Link></p>
        <p><Link href='/community'>Community</Link></p>
      </h1>
    </main>
  );
}
