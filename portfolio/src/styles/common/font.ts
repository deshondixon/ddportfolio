import { Fira_Code, Inter } from '@next/font/google';

const sans = Inter({
  adjustFontFallback: true,
  display: 'optional',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  weight: 'variable',
});

const mono = Fira_Code({
  adjustFontFallback: true,
  display: 'optional',
  fallback: [
    'Menlo',
    'Monaco',
    '"Lucida Console"',
    '"Liberation Mono"',
    '"DejaVu Sans Mono"',
    '"Helvetica Neue"',
    '"Bitstream Vera Sans Mono"',
    '"Courier New"',
    'monospace',
  ],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  weight: 'variable',
});

export const font = {
  mono: mono.style.fontFamily,
  sans: sans.style.fontFamily,
};
