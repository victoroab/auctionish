import Link from 'next/link'
import { ModeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className="w-full h-15 bg-background flex items-center justify-end border-b-2">
      <nav className="flex items-center justify-around w-full px-6 py-3">
        <span className="text-2xl font-bold cursor-pointer">
          <Link href="/">Auctionish</Link>
        </span>
        <ul className="flex items-center justify-end font-light gap-5 cursor-pointer">
          <li className="hover:text-primary">Home</li>
          <li className="hover:text-primary">Categories</li>
          <li className="hover:text-primary">Deals</li>
        </ul>
        <ModeToggle />
      </nav>
    </header>
  )
}
