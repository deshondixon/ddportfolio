import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='grid grid-cols-12 gap-6 my-14 px-48'>
        <div className='col-span-3 bg-white rounded-2xl'>Sidebar</div>
        <div className='col-span-9 bg-white rounded-2xl'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
