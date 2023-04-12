import { services } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/data';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';

const index = ({ services }) => {
  return (
    <div>
      <h1 className=''>Hello world!</h1>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  console.log('SERVER', services);

  return {
    props: {
      services: data.services,
    },
  };
};
