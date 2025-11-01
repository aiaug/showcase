import { NextRequest, NextResponse } from 'next/server';
import { redirects } from '../../../lib/projectRedirects';

export const runtime = 'nodejs';        // use 'edge' later if you want
export const dynamic = 'force-dynamic'; // switch to 'force-static' for prod

type RouteParams = { category: string; slug: string };

// Overloads for both Next 14 (sync) and Next 15 (async) params
export async function GET(_req: NextRequest, ctx: { params: RouteParams }): Promise<NextResponse>;
export async function GET(_req: NextRequest, ctx: { params: Promise<RouteParams> }): Promise<NextResponse>;
export async function GET(
_req: NextRequest,
ctx: { params: RouteParams | Promise<RouteParams> }
): Promise<NextResponse> {
// Handle both sync and async params without using "any"
const maybePromise = ctx.params as Promise<RouteParams>;
const { category, slug } =
typeof maybePromise.then === 'function'
? await maybePromise
: (ctx.params as RouteParams);

const cat = category.toLowerCase();
const s = slug.toLowerCase();

const categoryMap = redirects[cat as keyof typeof redirects];
if (!categoryMap) {
return NextResponse.json({ error: 'Not found (category)' }, { status: 404 });
}

const url = categoryMap[s];
if (!url) {
return NextResponse.json({ error: 'Not found (slug)' }, { status: 404 });
}

// Use 302 in dev to avoid browser caching; switch to 308 for production
return NextResponse.redirect(url, 302);
}