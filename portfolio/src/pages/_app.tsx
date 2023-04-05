import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='grid grid-col-12 gap-6 my-14 px-48'>
        <div className='grid grid-col-3 bg-white rounded-2xl'>Sidebar</div>
        <div className='grid grid-col-9 bg-white'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
