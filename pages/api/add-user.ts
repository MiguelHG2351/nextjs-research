import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next'
import { hashPassword } from "@/utils/hash";

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('fasdgfsdfamg ok;fsdjoksdfgjnfsdkljmgfhnsdgfk dlc')
  const request = await fetch('https://randomuser.me/api/')
  const response = await request.json()
  const data = response.results[0]

  const password = await hashPassword(data.login.password)

  await prisma.user.create({
    data: {
      email: data.email,
      name: `${data.name.first} ${data.name.last}`,
      password: password,
    },
  })
  console.log('fasdgfsdfamg ok;fsdjoksdfgjnfsdkljmgfhnsdgfk dl')

  return res.json({
    email: data.email,
    name: `${data.name.first} ${data.name.last}`,
    password: data.login.password,
    salt: data.login.salt,
  })
}
