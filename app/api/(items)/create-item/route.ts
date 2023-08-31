import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

type ItemProps = {
  description: string
  name: string
  quantity: number
  startingPrice: number
}

export async function POST(request: NextRequest) {
  // type the request to contain a username header
  try {
    const res: ItemProps = await request.json()
    const { description, name, quantity, startingPrice } = res
    const username = request.headers.get('X-name')!

    const item = await prisma.user.update({
      where: { username },
      data: {
        items: {
          create: {
            description,
            name,
            quantity,
            startingPrice,
          },
        },
      },
      select: {
        id: true,
      },
    })

    return NextResponse.json(item)
  } catch (e) {
    return NextResponse.json(e)
  }
}

export async function PUT(req: NextRequest) {
  try {
    const props: Partial<ItemProps> = await req.json()
    const username = req.headers.get('X-name')!
    const itemId = req.headers.get('x-item-id')!

    const updatedItem = await prisma.user.update({
      where: { username },
      data: { items: { update: { where: { id: itemId }, data: props } } },
      select: { items: { select: { id: true }, where: { id: itemId } } },
    })

    return NextResponse.json(updatedItem)
  } catch (e) {
    return NextResponse.json(e)
  }
}
