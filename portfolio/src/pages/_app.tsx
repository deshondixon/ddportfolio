import '@/styles/globals.css';
import Sidebar from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className='grid grid-cols-12 gap-6 my-14 lg:px-48 px-5'>
        <div className='lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center'>
          <Sidebar />
        </div>
        <div className='lg:col-span-9 bg-white rounded-2xl col-span-12'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
