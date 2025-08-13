'use client';

import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-white px-4">
			<div className="text-center space-y-6">
				<h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-normal text-black">Page not found</h1>
				<p className="text-base sm:text-lg text-neutral-500 max-w-md mx-auto">The page you’re looking for doesn’t exist.</p>
				<Link
					href="/"
					aria-label="Go to home page"
					className="inline-block border border-neutral-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-50 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
				>
					Return to Home
				</Link>
			</div>
		</div>
	);
}
