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
import { AnimatePresence } from 'framer-motion';

const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div>
        <NextThemesProvider
          defaultTheme='light'
          attribute='class'
          value={{
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            <div className='grid grid-cols-12 gap-6 px-5 text-white pt-14 lg:px-48'>
              <div className='col-span-12 p-4 text-center lg:col-span-3 rounded-2xl glass'>
                {loading ? <Skeleton height={500} /> : <Sidebar />}
              </div>
              <div className='col-span-12 overflow-hidden glass lg:col-span-9 rounded-2xl'>
                <Navbar />

                {loading ? (
                  <Skeleton height={2000} />
                ) : (
                  <AnimatePresence mode='wait'>
                    <Component {...pageProps} key={router.route} />
                  </AnimatePresence>
                )}
                <Analytics />
              </div>
            </div>
          </NextUIProvider>
        </NextThemesProvider>
      </div>
    </div>
  );
}
