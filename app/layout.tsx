import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const playfair = Playfair_Display({
	variable: '--font-display',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
});

const siteName = 'The Koenekamp';
const title = siteName;
const description =
	'Christoph Könekamp – DeFi Specialist, Blockchain Consultant, Full-Stack Web3 Developer, Infrastructure Architect (ENS/IPFS/IPNS).';

export const metadata: Metadata = {
	metadataBase: new URL('https://thekoenekamp.com'),
	title,
	description,
	applicationName: siteName,
	keywords: ['Christoph Könekamp', 'The Koenekamp', 'DeFi Specialist', 'Blockchain Consultant', 'Web3 Developer', 'ENS', 'IPFS', 'IPNS'],
	openGraph: {
		type: 'website',
		url: 'https://thekoenekamp.com',
		siteName,
		title,
		description,
		locale: 'en_US',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'The Koenekamp',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		site: '@thekoenekamp',
		creator: '@thekoenekamp',
		images: ['/og-image.jpg'],
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
	publisher: 'The Koenekamp',
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/icon.png', type: 'image/png', sizes: '32x32' },
			{ url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
			{ url: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full bg-white text-neutral-900">
			<body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased h-full`}>
				{/* Ganze Seite = Viewport-Höhe, Footer immer unten */}
				<div className="min-h-svh grid grid-rows-[1fr_auto] overflow-hidden">
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								'@context': 'https://schema.org',
								'@type': 'Person',
								name: 'Christoph Könekamp',
								url: 'https://thekoenekamp.com',
								email: 'mailto:contact@thekoenekamp.com',
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
					<main className="flex items-center justify-center px-6">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
