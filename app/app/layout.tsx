import Header from '@/components/header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="text-gray-600 min-h-screen p-6 pt-10 ">{children}</main>
    </>
  )
}
