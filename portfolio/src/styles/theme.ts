import type { ThemeProviderProps } from 'next-themes/dist/types';
import { createTheme } from '@nextui-org/react';
import { commonTokens } from './common';

/**
 * Light theme
 *
 * @see https://nextui.org/docs/theme/customize-theme
 */
const lightTheme = createTheme({
  className: 'light-theme',
  theme: {
    ...commonTokens,
    colors: {
      colorScheme: 'light',
    },
  },
  type: 'light',
});

/**
 * Dark theme
 *
 * @see https://nextui.org/docs/theme/dark-mode
 */
const darkTheme = createTheme({
  className: 'dark-theme',
  theme: {
    ...commonTokens,
    colors: {
      colorScheme: 'dark',
    },
  },
  type: 'dark',
});

/**
 * Next-Themes config
 *
 * @see https://github.com/pacocoursey/next-themes#api
 */
export const themeProps: Omit<ThemeProviderProps, 'children'> = {
  attribute: 'class',
  defaultTheme: 'system',
  disableTransitionOnChange: false,
  enableColorScheme: false,
  enableSystem: true,
  storageKey: 'theme',
  themes: ['dark', 'light'],
  value: {
    dark: darkTheme.className,
    light: lightTheme.className,
  },
};
