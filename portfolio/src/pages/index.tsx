import { services } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/data';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Text } from '@nextui-org/react';

const index = ({ services }) => {
  console.log(services);
  return (
    <div className='flex flex-col flex-grow px-6 pt-1 '>
      <Text className='my-3 text-base font-medium'>
        Software Engineer and Army Veteran offering a strong foundation in
        software development and programming principles across multiple
        platforms. Offers knowledge of authoring code derived from designing,
        building, and maintaining websites using scripting languages, content
        creation tools, and digital media. Demonstrated history of producing
        high-quality project results; possesses an innate talent for quickly
        mastering technology and new concepts.
      </Text>
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

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
