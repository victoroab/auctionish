import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(req: NextRequest) {
  try {
    const username = req.headers.get('X-name')!
    const itemId = req.headers.get('x-item-id')!

    const del = await prisma.user.update({
      where: { username },
      data: { items: { delete: { id: itemId } } },
      select: { items: { select: { id: true } } },
    })

    return NextResponse.json(del)
  } catch (e) {
    return NextResponse.json(e)
  }
}
