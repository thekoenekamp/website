import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
	const base = 'https://thekoenekamp.com';
	return [
		{
			url: `${base}/`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	];
}
