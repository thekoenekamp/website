import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import React from 'react';
// import Footer from './Footer';
import { themeDark, themeLight } from './styles';

const StyledSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	margin: 0 auto 0 auto;
	height: 100vh;
	width: 100vw;
	// background: #000;
	// pointer-events: none;

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemeProvider theme={themeLight}>
				<CssBaseline />
				<StyledSection>{children}</StyledSection>
				{/* <Footer /> */}
			</ThemeProvider>
		</>
	);
}
