import { services } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/data.ts';
import { GetServerSidePropsContext } from 'next';

const index = (props) => {
  console.log(services);

  return (
    <div>
      <h1 className=''>Hello world!</h1>
    </div>
  );
};

export default index;

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  fetch('http://localhost:3000/api/services');

  return {
    props: {},
  };
};
