import '../styles/globals.css';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Skeleton from 'react-loading-skeleton';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div>
      <NextUIProvider>
        <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48'>
          <div className='col-span-12 p-4 text-center bg-gray-800 lg:col-span-3 rounded-2xl'>
            {loading ? <Skeleton height={500} /> : <Sidebar />}
          </div>
          <div className='col-span-12 overflow-hidden bg-gray-800 lg:col-span-9 rounded-2xl'>
            <Navbar />

            {loading ? (
              <Skeleton height={2000} />
            ) : (
              <Component {...pageProps} />
            )}
            <Analytics />
          </div>
        </div>
      </NextUIProvider>
    </div>
  );
}
