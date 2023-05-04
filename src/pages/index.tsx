import { services } from '../data';
import { Text } from '@nextui-org/react';
import ServiceCard from '../../components/ServiceCard';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from '../animations';

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
      <motion.div
        className='flex flex-col flex-grow px-6 pt-1 '
        variants={routeAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Text
              css={{
                color: 'gray100',
              }}
              className='my-3 text-lg tracking-normal '
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
              className='flex-grow p-4 mt-5 '
              style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
            >
              <Text
                size={35}
                css={{
                  textGradient: '45deg, $yellow900 -20%, $purple700 100%',
                }}
                weight='bold'
                className='my-4 text-3xl font-medium tracking-wider'
              >
                Technical Skills
              </Text>
              <motion.div
                className='grid gap-6 my-3 md:grid-cols-2'
                variants={stagger}
                initial='initial'
                animate='animate'
              >
                {services.map((service) => (
                  <motion.div
                    className='col-span-2 p-2 rounded-lg md:col-span-1 '
                    key={service.title}
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Index;
