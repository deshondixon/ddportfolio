import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid gap-6 grid-col-12'>
      <div className='col-span-3 text-3xl text-red-500'>Sidebar</div>
      <div className='col-span-9 bg-white'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
