import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'KÖNEKAMP',
		short_name: 'KÖNEKAMP',
		start_url: '.',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				src: '/favicon.ico',
				sizes: '64x64 32x32 24x24 16x16',
				type: 'image/x-icon',
			},
			{
				src: '/icon.svg',
				type: 'image/svg+xml',
				sizes: '512x512',
			},
			{
				src: '/logo192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/logo512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
