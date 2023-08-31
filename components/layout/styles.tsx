import { createTheme } from '@mui/material/styles';

export const themeDark = createTheme({
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
	palette: {
		primary: {
			main: '#09000E',
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: `#000`,
		},
		text: {
			primary: '#ffffff',
			secondary: '#000014',
			disabled: '#5D6785',
		},
	},
});

export const themeLight = createTheme({
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
	palette: {
		primary: {
			main: '#09000E',
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: `#fff`,
		},
		text: {
			primary: '#ffffff',
			secondary: '#000014',
			disabled: '#5D6785',
		},
	},
});
