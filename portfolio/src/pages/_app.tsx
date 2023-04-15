import '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/src/styles/globals.css';
import Sidebar from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/components/Sidebar';
import Navbar from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/components/Navbar';
import { NextUIProvider } from '@nextui-org/react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { ThemeProvider } from 'next-themes';
import { themeProps } from '@styles';

const lightTheme = createTheme({
  type: 'light',
  theme: {},
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});

const App: NextPage<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <Fragment>
      <meta
        content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
        name='viewport'
      />
      <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48'>
        <div className='col-span-12 p-4 text-center bg-gray-800 lg:col-span-3 rounded-2xl'>
          <Sidebar />
        </div>
        <div className='col-span-12 overflow-hidden bg-gray-800 lg:col-span-9 rounded-2xl'>
          <Navbar />
          <ThemeProvider {...themeProps}>
            <NextUIProvider>
              <Component {...pageProps} />
            </NextUIProvider>
          </ThemeProvider>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
