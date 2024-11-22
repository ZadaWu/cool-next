import { NextResponse } from "next/server";

export function middleware(request){
    console.log(request);
    return NextResponse.next();
}

// This is a middleware that will intercept all requests to the /api/:path* route   
// export const config = {
//     matcher: '/news',
// };