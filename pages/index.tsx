import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Baskervville, Luxurious_Script } from 'next/font/google';
import Head from 'next/head';
import Facebook from 'public/svg/socials/facebook.svg';
import Github from 'public/svg/socials/github.svg';
import Instagram from 'public/svg/socials/instagram.svg';
import LinkedIn from 'public/svg/socials/linkedin.svg';
import X from 'public/svg/socials/x.svg';
import { useEffect, useState } from 'react';

const font = Luxurious_Script({
	subsets: ['latin'],
	weight: '400',
});

const fontText = Baskervville({
	subsets: ['latin'],
	weight: ['400'],
});

const Curtain = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	// background: rgba(0, 50, 20, 1);
	background: #000;
	transition: width 2.5s; // Adjust timing if needed
	z-index: 9999;
`;

const CurtainText = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: opacity 2s, top 2s; // Adjusted left to top
	color: #fff;
	font-size: 4rem;
	cursor: default;
	z-index: 9999;

	@media (max-width: 600px) {
		// width: 95%;
		font-size: 3rem;
	}
`;

const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 90%;
	max-width: 800px;
	height: auto;
	margin: 2% auto;
	background-color: transparent;

	@media (max-width: 600px) {
		width: 95%;
	}
`;

const Title = styled(Typography)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-family: ${font.style.fontFamily};
	color: #000;
	text-transform: none;
	font-size: 4rem;
	cursor: default;
	margin-bottom: 2.5rem;

	a {
		color: #000;
		text-decoration: none;
	}

	@media (max-width: 600px) {
		font-size: 3rem;
	}
`;

const EmailLink = styled.a`
	cursor: pointer;
	color: #000;
	text-decoration: underline;
	font-family: ${fontText.style.fontFamily};
	font-weight: 300;
	margin-bottom: 2.5rem;
	font-size: 0.9rem;

	&:hover {
		text-decoration: underline;
	}
`;

const Text = styled(Typography)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	font-family: ${fontText.style.fontFamily};
	color: #000;
	cursor: default;
	text-transform: none;
	font-size: 0.9rem;

	&:hover {
		background-color: transparent;
	}

	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2.5rem;
	justify-content: center;
	margin-top: 2.5rem;

	// & > a:first-child {
	// 	margin-top: 2.5rem;
	// }
`;

const Links = styled(Typography)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	font-family: ${fontText.style.fontFamily};
	color: #000;
	text-transform: none;
	text-decoration: underline;
	font-size: 0.8rem;
	font-weight: 300;

	&:hover {
		background-color: transparent;
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

export default function Page() {
	const [loading, setLoading] = useState(true);
	const [hideCurtain, setHideCurtain] = useState(false);
	const [hideLogo, setHideLogo] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setHideCurtain(true);
			setHideLogo(true);
		}, 1250);

		return () => clearTimeout(timer); // Cleanup timer to avoid potential memory leak
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>The Koenekamp</title>
				<meta property="og:title" content="The Koenekamp" key="title" />
				<meta property="og:site_name" content="The Koenekamp" />
				<meta property="og:description" content="Personal website of Christoph Koenekamp." />
				<meta property="og:image" content="https://thekoenekamp.com/favicon.ico" />
				<meta property="og:url" content="https://thekoenekamp.com/" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@thekoenekamp" />
				<meta name="twitter:title" content="The Koenekamp" />
				<meta name="twitter:description" content="Personal website of Christoph Koenekamp." />
				<meta name="twitter:image" content="https://thekoenekamp.com/favicon.ico" />
			</Head>
			{loading && (
				<>
					<Curtain style={{ width: hideCurtain ? '0%' : '100%' }} />
					<CurtainText
						style={{
							opacity: hideLogo ? 0 : 1,
							// left: hideLogo ? '60%' : '50%', // Move it to the right
							top: hideLogo ? '30%' : '50%', // Adjusted to move upwards
							...font.style,
						}}
					>
						The Koenekamp
					</CurtainText>
				</>
			)}
			<StyledBox>
				<Title>
					<a>The Koenekamp</a>
				</Title>
				<Text style={{ fontWeight: 'bold' }}>
					<a>Christoph Könekamp</a>
				</Text>
				<EmailLink href="mailto:contact@thekoenekamp.com">contact@thekoenekamp.com</EmailLink>
				<Text>DeFi Specialist</Text>
				<Text>Blockchain Consultant</Text>
				<Text>Full-Stack Web3 Developer</Text>
				<Text>Content Architect (ENS/IPFS)</Text>
				<LinksContainer>
					<a target="_blank" rel="noreferrer" href={'https://x.com/thekoenekamp'} aria-label="The Koenekamp's Twitter">
						{/* <Links>X</Links> */}
						<X style={{ fontSize: '16px', fill: 'black', height: '100%' }} />
					</a>
					<a target="_blank" rel="noreferrer" href={'https://github.com/thekoenekamp'} aria-label="The Koenekamp's GitHub">
						{/* <Links>GitHub</Links> */}
						<Github style={{ fontSize: '16px', fill: 'black', height: '100%' }} />
					</a>
					<a target="_blank" rel="noreferrer" href={'https://www.linkedin.com/in/thekoenekamp'} aria-label="The Koenekamp's LinkedIn">
						{/* <Links>LinkedIn</Links> */}
						<LinkedIn style={{ fontSize: '16px', fill: 'black', height: '100%' }} />
					</a>
					<a target="_blank" rel="noreferrer" href={'https://www.facebook.com/thekoenekamp'} aria-label="The Koenekamp's Facebook">
						{/* <Links>Facebook</Links> */}
						<Facebook style={{ fontSize: '16px', fill: 'black', height: '100%' }} />
					</a>
					<a target="_blank" rel="noreferrer" href={'https://www.instagram.com/thekoenekamp'} aria-label="The Koenekamp's Instagram">
						{/* <Links>Instagram</Links> */}
						<Instagram style={{ fontSize: '16px', fill: 'black', height: '100%' }} />
					</a>
				</LinksContainer>
			</StyledBox>
		</>
	);
}
