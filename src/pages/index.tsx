/* eslint-disable react/no-unescaped-entities */
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
        animate='animate'
        initial='initial'
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
              As an Full-Stack Software Engineer at JP Morgan & Chase, I design
              and develop web applications using Spring Boot, Java, and JSON
              libraries. I work with Agile methodology and participate in Scrum
              meetings to produce quality deliverables within deadlines. I also
              use Git and GitHub for version control, and run unit tests and API
              tests to ensure high standards and MVP's are met. I have a strong
              foundation in software engineering and programming principles
              across multiple platforms, thanks to my education and
              certification from Code Fellows and Coursera. I am proficient in
              HTML, CSS, JavaScript, Python, Django, Flask, React.js, MongoDB,
              Node.js, Express.js, and Bootstrap. I am also a US Army veteran
              and a former diesel mechanic, which gives me a unique perspective
              and a problem-solving mindset. I am passionate about creating
              innovative and user-friendly solutions that make a positive impact
              on people's lives.
            </Text>
            <div
              className='flex-grow p-4 mt-5 '
              style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
            >
              <Text
                size={35}
                css={{
                  textGradient: '45deg, $white -20%, $purple700 100%',
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
