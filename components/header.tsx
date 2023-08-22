export default function Header() {
  return (
    <header className="w-full h-15 bg-slate-400 flex items-center justify-end">
      <nav className="flex items-center justify-between w-full px-6 py-3">
        <span className="text-2xl text-black">
          <i>Auctionish</i>
        </span>
        <ul className="flex items-center justify-end gap-5">
          <li>Home</li>
          <li>Find</li>
          <li>Something</li>
        </ul>
      </nav>
    </header>
  )
}
