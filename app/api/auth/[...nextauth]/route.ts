import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import { isPasswordValid } from "@/utils/hash"

const prisma = new PrismaClient()
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "Your pass" }
      },
      async authorize(credentials: {email: string, password: string}) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        
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
          id: user.id,
          name: user.name,
          email: user.email,
        }
      }
    })
  ]
})

export { handler as GET, handler as POST }