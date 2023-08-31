import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const res = await request.json()
    const reg = await prisma.user.create({
      data: { email: '', username: '', phoneNumber: '' },
      select: { username: true },
    })

    return NextResponse.json(reg)
  } catch (e) {
    return NextResponse.json(e)
  }
}
