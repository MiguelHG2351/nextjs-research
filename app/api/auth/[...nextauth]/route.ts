import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import { isPasswordValid } from "@/utils/hash"

const prisma = new PrismaClient()
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        const email = credentials.email
        const user = await prisma.user.findUnique({
          where: { email: email }
        })
        if(!user) {
          return null
        }

        const isPasswordMatch = await isPasswordValid(credentials.password, user.password)
        if(!isPasswordMatch) {
          return null
        }

        return {
          name: user.name,
          email: user.email,
        }

      }
    })
  ]
})

export { handler as GET, handler as POST }