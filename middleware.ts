import { withAuth } from "next-auth/middleware"
// This function can be marked `async` if using `await` inside
export default withAuth(function middleware(req) {
  console.log(req.nextauth.token)
},{
  
  // callbacks: {
  //   authorized({ req, token }) {
  //     // `/admin` requires admin role
  //     if (req.nextUrl.pathname === "/admin") {
  //       return token?.userRole === "admin"
  //     }
  //     // `/me` only requires the user to be logged in
  //     return !!token
  //   },
  // },
})

export const config = { matcher: ["/((?!register|api|login).*)"] }