import '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/src/styles/globals.css';
import Sidebar from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/components/Sidebar';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
  theme: {},
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48'>
        <div className='col-span-12 p-4 text-center bg-gray-800 lg:col-span-3 rounded-2xl'>
          <Sidebar />
        </div>
        <div className='col-span-12 bg-white lg:col-span-9 rounded-2xl'>
          <NextThemesProvider
            defaultTheme='system'
            attribute='class'
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <NextUIProvider>
              <Component {...pageProps} />
            </NextUIProvider>
          </NextThemesProvider>
        </div>
      </div>
    </div>
  );
}
