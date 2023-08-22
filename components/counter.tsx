'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="text-black h-20 p-3 flex gap-3 items-center justify-center">
      <Button variant="outline" onClick={() => setCount((prev) => prev + 1)}>
        Add
      </Button>
      <p>{count}</p>
      <Button variant="outline" onClick={() => setCount(0)}>
        Reset
      </Button>
    </div>
  )
}
