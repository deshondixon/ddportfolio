import { services } from '../data';
import { Text } from '@nextui-org/react';
import ServiceCard from '../../components/ServiceCard';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTitle('Dashboard');
    }, 90);
  }, []);

  return (
    <>
      <div className='flex flex-col flex-grow px-6 pt-1 text-white '>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Text
              css={{
                color: 'white',
              }}
              className='my-3 text-lg tracking-normal text-white'
              weight='normal'
            >
              Software Engineer and Army Veteran offering a strong foundation in
              software development and programming principles across multiple
              platforms. Offers knowledge of authoring code derived from
              designing, building, and maintaining websites using scripting
              languages, content creation tools, and digital media. Demonstrated
              history of producing high-quality project results; possesses an
              innate talent for quickly mastering technology and new concepts.
            </Text>
            <div
              className='flex-grow p-4 mt-5 text-white bg-gray-900 '
              style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
            >
              <Text
                size={35}
                css={{
                  textGradient: '45deg, $purple600 -20%, $pink600 100%',
                }}
                weight='bold'
                className='my-4 text-3xl font-medium tracking-wider'
              >
                Technical Skills
              </Text>
              <div className='grid gap-6 my-3 text-white md:grid-cols-2'>
                {services.map((service) => (
                  <div
                    className='col-span-2 p-2 rounded-lg md:col-span-1 '
                    key={service.title}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
