import { services } from '../data';
import { Text } from '@nextui-org/react';
import ServiceCard from '../../components/ServiceCard';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import './index.css';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { currentTarget: el, clientX: x, clientY: y } = e;
      const {
        top: t,
        left: l,
        width: w,
        height: h,
      } = el.getBoundingClientRect();
      el.style.setProperty('--posX', `${x - 1 - w / 2}px`);
      el.style.setProperty('--posY', `${y - t - h / 2}px`);
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTitle('Dashboard');
    }, 90);
  }, []);

  return (
    <>
      <div className='flex flex-col flex-grow px-6 pt-1 '>
        {loading ? (
          <Skeleton width={500} height={200} />
        ) : (
          <>
            <Text
              className={`my-3 text-lg tracking-normal ${
                loading ? 'hidden' : ''
              }`}
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
            <div className='flex-grow p-4 mt-5 bg-gray-900 dark:bg-dark-100 service-section'>
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
              <div className='grid gap-6 my-3 md:grid-cols-2'>
                {services.map((service) => (
                  <div
                    className='col-span-2 p-2 bg-gray-800 rounded-lg dark:bg-dark-200 md:col-span-1 '
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
