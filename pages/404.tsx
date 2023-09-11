import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Baskervville, Luxurious_Script } from 'next/font/google';
import Head from 'next/head';

const font = Luxurious_Script({
	subsets: ['latin'],
	weight: '400',
});

const fontText = Baskervville({
	subsets: ['latin'],
	weight: ['400'],
});

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
		text-decoration: underline;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 600px) {
		font-size: 3rem;
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

export default function Page() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex" />
				<title>404 Not Found | The Koenekamp</title>
				<meta property="og:title" content="404 Not Found | The Koenekamp" key="title" />
				<meta property="og:site_name" content="404 Not Found | The Koenekamp" />
				<meta property="og:description" content="404 Not Found | The Koenekamp" />
				<meta property="og:image" content="https://thekoenekamp.com/favicon.ico" />
				<meta property="og:url" content="https://thekoenekamp.com/" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@thekoenekamp" />
				<meta name="twitter:title" content="404 Not Found | The Koenekamp" />
				<meta name="twitter:description" content="404 Not Found | The Koenekamp" />
				<meta name="twitter:image" content="https://thekoenekamp.com/favicon.ico" />
			</Head>
			<StyledBox>
				<Title>
					<a href={'/'} aria-label="Return to home page">
						Back home
					</a>
				</Title>
				<Text>
					<a>Sorry, we couldn't find that page.</a>
				</Text>
			</StyledBox>
		</>
	);
}
