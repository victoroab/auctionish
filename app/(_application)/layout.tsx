import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen p-6 pt-10">{children}</main>
}
