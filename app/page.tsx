import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>WELCOME</h1>
      <Link href="/app">
        <span>Go to app</span>
      </Link>
    </main>
  )
}
