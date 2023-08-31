import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/docs',
    '/app',
    '/app/products',
    '/api/get-items',
    '/api/get-item/(.*)',
    '/api/create-item',
    '/api/delete-item',
  ],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
