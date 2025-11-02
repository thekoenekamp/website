import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import './globals.css';

const siteName = 'KÖNEKAMP';
const title = siteName;
const description = 'Authority in form. Discipline in presence. Timeless by design.';

export const metadata: Metadata = {
	metadataBase: new URL('https://thekoenekamp.com'),
	title,
	description,
	applicationName: siteName,
	keywords: ['Christoph Könekamp', 'The Koenekamp', 'DeFi Specialist', 'Blockchain Consultant', 'Web3 Developer', 'ENS', 'IPFS', 'IPNS'],
	openGraph: {
		title: 'Christoph Könekamp',
		description: 'Authority in form. Discipline in presence. Timeless by design.',
		url: 'https://thekoenekamp.com',
		siteName: 'KÖNEKAMP',
		images: [
			{
				url: 'https://thekoenekamp.com/og.png',
				width: 1200,
				height: 630,
				alt: 'Könekamp Website Preview',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		site: '@thekoenekamp',
		creator: '@thekoenekamp',
		images: ['/og.png'],
	},
	alternates: {
		canonical: 'https://thekoenekamp.com',
	},
	robots: {
		index: true,
		follow: true,
	},
	category: 'technology',
	authors: [{ name: 'Christoph Könekamp', url: 'https://thekoenekamp.com' }],
	creator: 'Christoph Könekamp',
	publisher: 'Christoph Könekamp',
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/logo.svg', type: 'image/svg+xml' },
			{ url: '/icon.png', type: 'image/png', sizes: '32x32' },
			{ url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
			{ url: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full bg-white text-neutral-900">
			<body className="antialiased h-full">
				{/* Whole page = Viewport height, Footer always at bottom */}
				<div className="flex min-h-svh flex-col overflow-hidden">
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								'@context': 'https://schema.org',
								'@type': 'Person',
								name: 'Christoph Könekamp',
								url: 'https://thekoenekamp.com',
								email: 'mailto:office@thekoenekamp.com',
								jobTitle: ['DeFi Specialist', 'Blockchain Consultant', 'Full-Stack Web3 Developer', 'Infrastructure Architect'],
								sameAs: [
									'https://x.com/your_handle',
									'https://github.com/your_handle',
									'https://www.linkedin.com/in/your_handle/',
									'https://instagram.com/your_handle',
								],
							}),
						}}
					/>
					<Header />
					<main className="flex-1 flex items-center justify-center px-6">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
