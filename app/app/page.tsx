import Counter from '@/components/counter'

export default function App() {
  return (
    <main className="h-64 flex items-center justify-center flex-col gap-4">
      <span className="text-large font-bold">This is the app</span>
      <Counter />
    </main>
  )
}
