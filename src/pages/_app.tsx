import '../styles/globals.css';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Skeleton from 'react-loading-skeleton';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';

const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div>
      <NextThemesProvider
        defaultTheme='system'
        attribute='class'
        value={{
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <div className='grid grid-cols-12 gap-6 px-5 pt-14 lg:px-48'>
          
                <Skeleton height={2000} />
              ) : (
                <Component {...pageProps} />
              )}
              <Analytics />
            </div>
          </div>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
}
