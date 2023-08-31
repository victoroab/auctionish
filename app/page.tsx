import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full grow h-fit pt-12 min-h-[85vh] container">
      <h1 className="mr-3">WELCOME</h1>
      <Link href="/app">
        <span>
          <i>Go to app</i>
        </span>
      </Link>
    </main>
  )
}
