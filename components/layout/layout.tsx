import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import React, { useEffect, useState } from 'react';
// import Footer from './Footer';
import { themeDark, themeLight } from './styles';

const StyledSection = styled.section<{ dynamicHeight: number | string }>`
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
	align-content: center;
	margin: 0 auto 0 auto;
	min-height: ${(props) => props.dynamicHeight}px; // Use dynamic height
	max-height: 100vh;
	min-width: 100vw;
	max-width: 100vw;

	// @media (max-width: 960px) {
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: center;
	// 	align-content: center;
	// 	margin: 0 auto 0 auto;
	// }

	// @media (max-width: 640px) {
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: center;
	// 	text-align: center;
	// 	align-content: center;
	// 	margin: 0 auto 0 auto;
	// }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [dynamicHeight, setDynamicHeight] = useState(0); // Initialize to 0 or a default height

	useEffect(() => {
		// Update the height once the component mounts
		setDynamicHeight(window.innerHeight);

		const adjustHeight = () => {
			setDynamicHeight(window.innerHeight);
		};

		window.addEventListener('resize', adjustHeight);

		// Cleanup
		return () => {
			window.removeEventListener('resize', adjustHeight);
		};
	}, []);

	return (
		<>
			<ThemeProvider theme={themeLight}>
				<CssBaseline />
				<StyledSection dynamicHeight={dynamicHeight || '100vh'}>{children}</StyledSection>
				{/* <Footer /> */}
			</ThemeProvider>
		</>
	);
}
