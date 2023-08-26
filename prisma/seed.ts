import { prisma } from '../lib/prisma'

const userEmail = ['foo@gmail.com', 'bar@gmail.com']

async function main() {
  for (const email of userEmail) {
    await prisma.user.upsert({
      where: { email: email },
      update: {},
      create: {
        email: email,
        username: 'foo', // username has to be unique
        items: {
          create: {
            name: 'Pencils',
            description: 'A pack of 10 pencils',
            startingPrice: 100,
            quantity: 10,
          },
        },
      },
    })
  }

  // const foo = await prisma.user.upsert({
  //   where: { email: 'foo@gmail.com' },
  //   update: {},
  //   create: {
  //     email: 'foo@gmail.com',
  //     username: 'foo',
  //     items: {
  //       create: {
  //         name: 'Pencils',
  //         description: 'A pack of 10 pencils',
  //         startingPrice: 100,
  //         quantity: 10,
  //       },
  //     },
  //   },
  // })
  // const bar = await prisma.user.upsert({
  //   where: { email: 'bar@gmail.com' },
  //   update: {},
  //   create: {
  //     email: 'bar@gmail.com',
  //     username: 'bar',
  //     items: {
  //       create: {
  //         name: 'Eraser',
  //         description: 'A pack of Erasers',
  //         quantity: 12,
  //         startingPrice: 200,
  //       },
  //     },
  //   },
  //   include: { items: true },
  // })
  // const create = await prisma.user.create({
  //   data: {
  //     email: 'g@gmail.com',
  //     username: 'gg',
  //     items: {
  //       create: {
  //         name: 'gf',
  //         description: 'ala',
  //         quantity: 12,
  //         startingPrice: 200,
  //       },
  //     },
  //   },
  // })

  // console.log(foo)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
