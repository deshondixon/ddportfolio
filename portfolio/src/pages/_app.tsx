import '../styles/globals.css';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
  theme: {},
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});

export default function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <div>
          <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48'>
            <div className='col-span-12 p-4 text-center bg-gray-800 lg:col-span-3 rounded-2xl'>
              <Sidebar />
            </div>
            <div className='col-span-12 overflow-hidden bg-gray-800 lg:col-span-9 rounded-2xl'>
              <Navbar />

              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
