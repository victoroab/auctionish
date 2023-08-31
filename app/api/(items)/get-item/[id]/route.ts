import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { itemOptions } from '../../types'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const username = request.headers.get('X-name')!
    const item = await prisma.user.findUnique({
      where: { username },
      select: { items: { select: itemOptions, where: { id } } },
    })
    return NextResponse.json(item)
  } catch (e) {
    return NextResponse.json(e)
  }
}
