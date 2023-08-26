import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auctionish',
  description: 'An auctioning software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <body className={cn(inter.className, 'min-h-screen flex flex-col')}>
            <Header />
            <div className="py-2 h-fit md:py-18 grow container">{children}</div>
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}
