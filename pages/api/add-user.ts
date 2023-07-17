import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next'
import { hashPassword } from "@/utils/hash";
import axios from 'axios'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const request = await axios.get('https://randomuser.me/api/')
  const data = request.data.results[0]

  try {
    const password = await hashPassword(data.login.password)
    await prisma.user.create({
      data: {
        email: data.email,
        name: `${data.name.first} ${data.name.last}`,
        password: password,
        salt: data.login.salt,
      },
    })
  
    return res.status(200).json({
      email: data.email,
      name: `${data.name.first} ${data.name.last}`,
      password: data.login.password,
      salt: data.login.salt,
    })
  } catch(err) {
    return res.status(500).json({
      error: 'Something went wrong',
    })
  }
  
}
