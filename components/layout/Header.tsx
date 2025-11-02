'use client';

import Link from 'next/link';
import React from 'react';

export default function Header() {
	return (
		<header className="w-full text-black mt-5 -mb-5 font-sans">
			<div className="container mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
				{/* Left placeholder */}
				<div className="hidden sm:block flex-1" />

				{/* IPNS Link */}
				<Link href="/" className="text-[2.125rem] text-center">
					{/* <div className="font-baskerville font-[400] scale-x-[1] scale-y-[0.9]">KÖNEKAMP</div> */}
				</Link>

				{/* Right placeholder */}
				<div className="hidden sm:block flex-1" />
			</div>
		</header>
	);
}
