import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  return NextResponse.json({ foo: 123, bar: '456' })
}

export async function POST(req: Request) {
  return NextResponse.json(req.body)
}
