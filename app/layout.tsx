'use client';

import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import { Scheherazade_New } from 'next/font/google';
import React, { ReactNode } from 'react';
import Footer from './Footer';
import { themeDark } from './styles';

const font = Scheherazade_New({
	subsets: ['latin'],
	weight: '400',
});

const StyledSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	margin: 0 auto 0 auto;
	height: 100vh;
	width: 100%;
	background: #000;
	pointer-events: none;

	@media (max-width: 960px) {
		display: flex;
		align-items: center;
		justify-content: center;
		align-content: center;
		margin: 0 auto 0 auto;
	}

	@media (max-width: 640px) {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		align-content: center;
		margin: 0 auto 0 auto;
	}
`;

// export const metadata = {
// 	title: 'MUI',
// 	description: 'MUI',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ThemeProvider theme={themeDark}>
					<CssBaseline />
					<StyledSection>{children}</StyledSection>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
