import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient({ log: ["query"]})
const prisma = new PrismaClient()

async function main() {
    // const users = await prisma.user.findMany()
    // console.log(users)
    
    await prisma.user.deleteMany()

    // await prisma.user.create({
    //   data: { 
        
    //   }
    // })

    // const user = await prisma.user.createMany({
    //   data: [{
    //     name: "Kyle",
    //     email: "kyle@test.com",
    //     age: 27,
    //     // userPreference: {
    //     //   create: {
    //     //     emailUpdates: true,
    //     //   }
    //     // }
    //   }, {
    //     name: "Sally",
    //     email: "sally@test.com",
    //     age: 32,
    //   }],
    //   // include: {
    //   //   userPreference: true,
    //   // }
    //   // select: {
    //   //   name: true,
    //   //   // userPreference: true,
    //   //   userPreference: { select: { id: true } },
    //   // }
    // })

    // const user = await prisma.user.findUnique({
    //   where: {
    //     // email: "kyle@test.com",
    //     age_name: {
    //       age: 27,
    //       name: "Kyle"
    //     }
    //   },
    // })

    // const user = await prisma.user.findFirst({
    //   where: {
    //     name: "Kyle",
    //   },
    // })

    // const user = await prisma.user.findMany({
    //   where: {
    //     name: "Kyle",
    //   },
    // })

    await prisma.user.createMany({
      data: [
        {
          name: "Kyle",
          age: 27,
          email: "kyle@test.com",
        },
        {
          name: "Sally",
          age: 32,
          email: "sally@test.com",
        },
        {
          name: "Sally",
          age: 12,
          email: "sally@test1.com",
        },
        {
          name: "Sally",
          age: 13,
          email: "sally@test2.com",
        },
      ],
    })

    // const user = await prisma.user.findMany({
    //   where: {
    //     // name: { not: "Sally" },
    //     // name: { equals: "Sally" },
    //     // name: { in: ["Sally", "Kyle"] },
    //     // name: { notiI: ["Sally", "Kyle"] },
    //     // age: { lt: 20 }, // less than. gt = greater than, gte = greater than equal. lte = less than equal.
    //     // email: { contains: "@test.com" }, // startsWith, endsWith

    //     // AND: [ // OR, NOT
    //     //   {email: {startsWith: "sally" }},
    //     //   {name: "Sally"}
    //     // ]
    //     writtenPosts: {
    //       every: {
    //         title: "Test",
    //       }
    //     }
    //   },
    //   orderBy: {
    //     // age: "asc"
    //     age: "desc"
    //   },
    //   // distinct: ["name"],
    //   // take: 2,
    //   // skip: 1,
    // })

    // const user = await prisma.post.findMany({
    //   where: {
    //     author: {
    //       is: {
    //         age: 27,
    //       }
    //     }
    //   },
    // })

    // const user = await prisma.user.update({
    //   where: {
    //     email: "sally@test.com"
    //   },
    //     data: {
    //       email: "sally@test3.com"
    //     }
    // })

    // const user = await prisma.user.updateMany({
    //   where: {
    //     name: "Sally"
    //   },
    //   data: {
    //     name: "New Sally"
    //   }
    // })

    // const user = await prisma.user.update({
    //   where: {
    //     email: "kyle@test.com"
    //   },
    //   data: {
    //     age: {
    //       increment: 1 //decrement: 1, multiply: 10, divide: 10
    //     }
    //   },
    // })
    
    // console.log(user)

    // const preference = await prisma.userPreference.create({
    //   data: {
    //     emailUpdates: true
    //   },
    // })
    
    // console.log(preference)

    // const user = await prisma.user.update({
    //   where: {
    //     email: "kyle@test.com"
    //   },
    //   data: {
    //     userPreference: {
    //       connect: { // discconect: true
    //         id: '2fc9bdc8-dd19-4385-bf7c-a05e8c3abeda'
    //       }
    //     }
    //   },
    // })
    
    // console.log(user)

    //  const user = await prisma.user.delete({
    //   where: {
    //     email: "kyle@test.com",
    //   }
    //  })

    // const user = await prisma.user.deleteMany({
    //   where: {
    //     age: { gt: 20 },
    //   }
    //  })

     console.log(user)
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

