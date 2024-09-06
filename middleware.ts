import { clerkMiddleware } from "@clerk/nextjs/server";

// Correctly export the middleware function
export const middleware = clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
console.log(typeof middleware); // Should log 'function'