'use client';

import styled from '@emotion/styled';
import Head from 'next/head';

const StyledSectionDesktop = styled.section`
	display: flex;
	align-items: center;
	margin: 0 auto 0 auto;
	flex-direction: row;

	@media (max-width: 960px) {
		display: none;
		visibility: hidden;
	}

	@media (max-width: 640px) {
		display: none;
		visibility: hidden;
	}
`;

const StyledSectionMobile = styled.section`
	display: none;
	visibility: hidden;

	@media (max-width: 960px) {
		display: flex;
		visibility: visible;
		align-items: center;
		justify-content: center;
		align-content: center;
		width: 100%;
		margin: 0 auto 0 auto;
		flex-direction: column;
	}

	@media (max-width: 640px) {
		display: flex;
		visibility: visible;
		align-items: center;
		justify-content: center;
		align-content: center;
		width: 100%;
		margin: 0 auto 0 auto;
		flex-direction: column;
	}
`;

export default function Page() {
	return (
		<>
			<Head>
				<title>Christoph Könekamp</title>
				<meta property="og:title" content="Christoph Könekamp" key="title" />
				<meta property="og:site_name" content="Christoph Könekamp" />
				<meta property="og:description" content="Personal website of Christoph Könekamp." />
				<meta property="og:image" content="https://christophkoenekamp.com/favicon.ico" />
				<meta property="og:url" content="https://christophkoenekamp.com/" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@christophkoenekamp" />
				<meta name="twitter:title" content="Christoph Könekamp" />
				<meta name="twitter:description" content="Personal website of Christoph Könekamp." />
				<meta name="twitter:image" content="https://christophkoenekamp.com/favicon.ico" />
			</Head>
			{/* <CursorShadow /> */}
			<StyledSectionDesktop style={{ color: '#fff', fontSize: '40px' }}>
				<a>Christoph Könekamp</a>
			</StyledSectionDesktop>
			<StyledSectionMobile style={{ color: '#fff', fontSize: '30px' }}>
				<a>Christoph Könekamp</a>
			</StyledSectionMobile>
		</>
	);
}
