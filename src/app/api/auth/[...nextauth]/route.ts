import { handlers } from '@/auth';

// By exporting dynamic = 'force-dynamic', we tell Next.js that this route
// should always be executed on the server and never be cached. This is
// crucial for authentication routes.
export const dynamic = 'force-dynamic';

export const { GET, POST } = handlers;