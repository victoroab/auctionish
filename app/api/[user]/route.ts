import { NextRequest, NextResponse } from 'next/server'

// export async function GET() {
//   return NextResponse.json({ foo: 123, bar: '456' })
// }

export async function POST(
  request: NextRequest,
  { params }: { params: { user: string } }
) {
  return NextResponse.json({ msg: params })
}
