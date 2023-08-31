import { Inter } from 'next/font/google'

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen p-6 pt-10 w-full">{children}</main>
}
