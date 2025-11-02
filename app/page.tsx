import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center text-center w-full max-w-[760px] px-6 cursor-default">
			{/* Brand / Name */}
			<div className="text-4xl sm:text-5xl md:text-5xl font-normal leading-tight tracking-wide mb-0">
				<div className="space-y-2">
					<div className="scale-y-[0.9]">KÖNEKAMP</div>
				</div>
			</div>

			{/* Name + Email */}
			<div className="mb-0 space-y-2">
				{/* <div className="text-sm mb-0 font-semibold">Christoph Könekamp</div> */}
				<a href="mailto:office@thekoenekamp.com" className="text-sm underline">
					office@thekoenekamp.com
				</a>
			</div>

			{/* Roles */}
			{/* <ul className="text-sm leading-relaxed space-y-0">
				<li>DeFi Specialist</li>
				<li>Blockchain Consultant</li>
				<li>Full-Stack Web3 Developer</li>
				<li>Infrastructure Architect (ENS/IPFS/IPNS)</li>
			</ul> */}

			{/* Social Links */}
			<div className="mt-4 flex space-x-6">
				<a target="_blank" rel="noreferrer" href="https://x.com/thekoenekamp" className="group" title="X (Twitter)" aria-label="X (Twitter)">
					<FaXTwitter className="w-4 h-4" />
				</a>
				<a target="_blank" rel="noreferrer" href="https://github.com/thekoenekamp" className="group" title="GitHub" aria-label="GitHub">
					<FaGithub className="w-4 h-4" />
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thekoenekamp/" className="group" title="LinkedIn" aria-label="LinkedIn">
					<FaLinkedin className="w-4 h-4" />
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.facebook.com/thekoenekamp" className="group" title="Facebook" aria-label="Facebook">
					<FaFacebook className="w-4 h-4" />
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/thekoenekamp" className="group" title="Instagram" aria-label="Instagram">
					<FaInstagram className="w-4 h-4" />
				</a>
			</div>
		</main>
	);
}
