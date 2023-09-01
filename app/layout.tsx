import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import { cn } from '@/lib/utils'
import Footer from '@/components/footer'

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
    // <ClerkProvider>
    // </ClerkProvider>
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={cn(inter.className, 'min-h-screen flex flex-col')}>
          <Header />
          <div className="h-fit md:py-18 w-full grow container">{children}</div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
