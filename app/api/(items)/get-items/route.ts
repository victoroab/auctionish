import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { itemOptions } from '../types'

export async function GET(request: NextRequest) {
  // type the request to contain a username header
  try {
    const username = request.headers.get('X-name')!

    const items = await prisma.user.findUnique({
      where: { username: username },
      select: { items: { select: itemOptions } },
    })

    return NextResponse.json(items)
  } catch (e) {
    return NextResponse.json(e)
  }
}
