import { prisma } from '../lib/prisma'

const userEmail = [
  'foo@gmail.com',
  'bar@gmail.com',
  'a@gmail.com',
  'b@gmail.com',
  'c@gmail.com',
  'd@gmail.com',
  'e@gmail.com',
]

const userItems: {
  name: string
  description: string
  startingPrice: number
  quantity: number
}[] = new Array(userEmail.length).fill({
  name: 'Pencils',
  description: 'A pack of 10 pencils',
  startingPrice: 100,
  quantity: 10,
})

async function main() {
  for (const email of userEmail) {
    await prisma.user.upsert({
      where: { email: email },
      update: {},
      create: {
        email: email,
        username: email.replaceAll('@gmail.com', ''),
        items: {
          create: userItems[userEmail.indexOf(email)],
        },
      },
    })
  }
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
