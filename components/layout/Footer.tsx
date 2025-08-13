'use client';

import React from 'react';
import { LuExternalLink } from 'react-icons/lu';

export default function Footer() {
	return (
		<footer className="row-start-2 w-full text-black py-6 pb-[env(safe-area-inset-bottom)] mb-6 font-sans">
			<div className="container mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
				{/* Left placeholder (Logo/Navi möglich) */}
				<div className="hidden sm:block flex-1" />

				{/* IPNS Link */}
				<div className="text-[0.6rem] text-center">
					<a
						href="https://thekoenekamp.eth.limo"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-1 underline underline-offset-1"
					>
						<span className="relative top-[1px]">IPNS</span>
						<LuExternalLink className="w-3 h-3" />
					</a>
				</div>

				{/* Right placeholder */}
				<div className="hidden sm:block flex-1" />
			</div>

			{/* Bottom Section */}
			<div className="mt-2 text-[0.5rem] text-center">Copyright © {new Date().getFullYear()} The Koenekamp. All rights reserved.</div>
		</footer>
	);
}
