import Link from 'next/link'
import { ModeToggle } from './theme-toggle'
import { UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className="w-full h-14 bg-background flex items-center justify-end border-b-2">
      <nav className="flex items-center justify-around w-full px-6 py-3">
        <span className="text-2xl font-bold cursor-pointer">
          <Link href="/">Auctionish</Link>
        </span>
        <ul className="flex items-center justify-end font-medium gap-5">
          <Link href="/app">
            <li className="hover:text-primary cursor-pointer">Home</li>
          </Link>
          <li className="hover:text-primary cursor-pointer">Auctions</li>
          <li className="hover:text-primary cursor-pointer">Deals</li>
        </ul>
        <div className="flex items-center justify-center gap-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  )
}
