import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const round = (num: number) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '');
const rem = (px: number) => `${round(px / 16)}rem`;

export const theme: DefaultTheme = {
	colors: {
		background: '#0C0B0B',
		white: '#FFFFFF',
		red: '#E2181A',
		secondary: '#EDEDED',
	},
	fontFamily: {
		heading: ['IBM Plex Sans', 'sans-serif'].join(','),
		sans: ['Noto Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
		mono: ['IBM Plex Mono', 'serif'].join(','),
	},
	fontSize: {
		xs: rem(10),
		sm: rem(12),
		md: rem(14),
		base: rem(16),
		lg: rem(18),
		xl: rem(20),
		'2xl': rem(24),
		'3xl': rem(32),
		'4xl': rem(40),
		'5xl': rem(64),
	},
};

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
	// eslint-disable-next-line react/react-in-jsx-scope
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

