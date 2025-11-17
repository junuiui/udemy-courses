'use client'

export default function Error({ msg }) {
  return <main className="error">
    <h1>
      An Error occured!
    </h1>
    <p>{msg}</p>
  </main>
}