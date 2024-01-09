// import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     return NextResponse.rewrite(new URL("/signup", req.url))
//   },
//   {
//     callbacks: {
//       authorized: ({ session }) => session?.role === "777user_admin",
//     },
//   }
// )

// export const config = { matcher: ['/admin', '/((?!api|_next/static|_next/image|favicon.ico).*)'] }

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("Hiii");
  },
  {
    callbacks: {
      authorized: (req) => req.token?.role === '777user_admin',
    },
  }
)

export const config = { matcher: ['/admin/:path*'] }