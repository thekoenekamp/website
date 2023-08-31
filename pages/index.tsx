import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Cormorant_Garamond, Luxurious_Script } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const font = Luxurious_Script({
	subsets: ['latin'],
	weight: '400',
});

const fontText = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400'],
});

const Curtain = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
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
	margin-bottom: 1rem;

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
	font-size: 1rem;

	&:hover {
		background-color: transparent;
	}

	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.1rem;

	& > a:first-child {
		margin-top: 1rem;
	}
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
	font-size: 1rem;
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
				<title>Christoph Koenekamp</title>
				<meta property="og:title" content="Christoph Koenekamp" key="title" />
				<meta property="og:site_name" content="Christoph Koenekamp" />
				<meta property="og:description" content="Personal website of Christoph Koenekamp." />
				<meta property="og:image" content="https://christophkoenekamp.com/favicon.ico" />
				<meta property="og:url" content="https://christophkoenekamp.com/" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@christophkoenekamp" />
				<meta name="twitter:title" content="Christoph Koenekamp" />
				<meta name="twitter:description" content="Personal website of Christoph Koenekamp." />
				<meta name="twitter:image" content="https://christophkoenekamp.com/favicon.ico" />
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
						Koenekamp
					</CurtainText>
				</>
			)}
			<StyledBox>
				<Title>
					<a href={'/'}>Koenekamp</a>
				</Title>
				<Text style={{ fontWeight: 'bold' }}>
					<a>Christoph Könekamp</a>
				</Text>
				<EmailLink href="mailto:contact@christophkoenekamp.com">contact@christophkoenekamp.com</EmailLink>
				<Text>Full-Stack Web3 Developer</Text>
				<Text>DeFi Specialist</Text>
				<LinksContainer>
					<a target="_blank" rel="noreferrer" href={'https://twitter.com/KoenekampC'}>
						<Links>X</Links>
					</a>
					<a target="_blank" rel="noreferrer" href={'https://www.linkedin.com/in/christophkoenekamp'}>
						<Links>LinkedIn</Links>
					</a>
					<a target="_blank" rel="noreferrer" href={'https://www.instagram.com/christophkoenekamp'}>
						<Links>Instagram</Links>
					</a>
					<a target="_blank" rel="noreferrer" href={'https://www.facebook.com/thechristophkoenekamp'}>
						<Links>Facebook</Links>
					</a>
				</LinksContainer>
			</StyledBox>
		</>
	);
}
