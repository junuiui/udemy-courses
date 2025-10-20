import Link from "next/link";

export default function MealPage() {
  console.log("Meal Page Loaded")
  return (
    <>
      <h1>Meal Page</h1>
      <p><Link href="/meals/share-1">Share 1</Link></p>
      <p><Link href="/meals/share-2">Share 2</Link></p>
      <p><Link href="/meals/share-3">Share 3</Link></p>
    </>
  )
}