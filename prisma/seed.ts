import { prisma } from '../lib/prisma'
async function main() {
  const foo = await prisma.user.upsert({
    where: { email: 'foo@gmail.com' },
    update: {},
    create: {
      email: 'foo@gmail.com',
      username: 'foo',
      // items: {
      //   create: {
      //     name: 'Pencils',
      //     description: 'A pack of 10 pencils',
      //     startingPrice: 100,
      //     quantity: 10,
      //     updatedAt: new Date(),
      //   },
      // },
    },
  })
  const bar = await prisma.user.upsert({
    where: { email: 'bar@gmail.com' },
    update: {},
    create: {
      email: 'bar@gmail.com',
      username: 'bar',
      // items: {
      //   create: {
      //     name: 'Eraser',
      //     description: 'A pack of 5 erasers',
      //     startingPrice: 100,
      //     quantity: 5,
      //   },
      // },
    },
  })
  console.log(foo, bar)
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
