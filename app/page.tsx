import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex w-full grow h-fit min-h-[85vh]">
      <h1 className="mr-3">WELCOME</h1>
      <Link href="/app">
        <span>
          <i>Go to app</i>
        </span>
      </Link>
    </main>
  )
}
