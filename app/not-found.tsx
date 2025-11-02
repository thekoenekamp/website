'use client';

import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex items-center justify-center bg-white px-4">
			<div className="text-center space-y-6">
				<h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-normal text-black">Page not found</h1>
				<p className="text-base sm:text-md text-neutral-500 max-w-md mx-auto mb-0">The page you are looking for does not exist.</p>
				<p className="text-base sm:text-md text-neutral-500 max-w-xl mx-auto mt-0">You may have mistyped or the page may have moved.</p>
				<Link
					href="/"
					aria-label="Go to homepage"
					className="inline-block border border-black px-6 py-3 text-sm font-medium text-white transition bg-black"
				>
					RETURN HOME
				</Link>
			</div>
		</div>
	);
}
