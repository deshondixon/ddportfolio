import { Text, Progress, Spacer } from '@nextui-org/react';
import { languages } from '../data';
import { tools } from '../data';
import Bar from '../../components/Bar';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
import Head from 'next/head';
import Link from 'next/link';

const resume = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <motion.div
        className='flex px-6 py-2 '
        variants={routeAnimation}
        animate='animate'
        initial='initial'
        exit='exit'
      >
        <div className='grid gap-6 md:grid-cols-2'>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <Text
              size={35}
              css={{
                textGradient: '45deg, $yellow600 -20%, $red600 100%',
              }}
              weight='bold'
              className='my-3 text-3xl font-medium tracking-wide'
            >
              Education
            </Text>
            <div>
              <Text
                size={20}
                weight='bold'
                css={{
                  color: '#ffffff',
                }}
              >
                AWS Certified Cloud Practitioner
              </Text>
              <Text
                size={20}
                weight='bold'
                css={{
                  color: '#ffffff',
                }}
              >
                Amazon Web Services (2023 - 2026)
              </Text>
              <Text
                className='my-3 text-lg tracking-normal'
                weight='normal'
                css={{
                  color: '#ffffff',
                }}
              >
                <Link href='https://www.credly.com/badges/1eaa4675-fb10-4234-a5e0-2bce9e2cca69/public_url'>
                  AWS Certified Cloud Practitioner Certificate
                </Link>
              </Text>
            </div>
            <Spacer />
            <div>
              <Text
                size={20}
                weight='bold'
                css={{
                  color: '#ffffff',
                }}
              >
                Advanced Software Development in Python
              </Text>
              <Text
                size={20}
                weight='bold'
                css={{
                  color: '#ffffff',
                }}
              >
                Code Fellows (2022 - 2023)
              </Text>
              <Text
                className='my-3 text-lg tracking-normal'
                weight='normal'
                css={{
                  color: '#ffffff',
                }}
              >
                Wrote clean, well-tested, advanced Python code using
                industry-standard software engineering patterns; studied the
                foundational structures of programming, from object-oriented
                principles to advanced topics
              </Text>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <Text
              size={35}
              css={{
                textGradient: '45deg, $yellow600 -20%, $red600 100%',
              }}
              weight='bold'
              className='my-3 text-3xl font-medium tracking-wide'
            >
              Experience
            </Text>
            <div>
              <Text
                size={20}
                weight='bold'
                css={{
                  color: '#ffffff',
                }}
              >
                Software Engineer
              </Text>
              <Text
                size={20}
                weight='bold'
                css={{
                  color: '#ffffff',
                }}
              >
                JP Morgan & Chase (Aug 2023 - Dec 2023)
              </Text>

              <Text
                className='my-3 text-lg tracking-normal'
                weight='normal'
                css={{
                  color: '#ffffff',
                }}
              >
                Full Stack Software Engineer and Army Veteran offering a strong
                foundation in software development and programming principles
                across multiple platforms. Offers knowledge of authoring code
                derived from designing, building, and maintaining websites using
                scripting languages, content creation tools, and digital media.
                Demonstrated history of producing high-quality project results;
                possesses an innate talent for quickly mastering technology and
                new concepts.
              </Text>
              <Spacer />
              <Text
                size={20}
                weight='bold'
                css={{
                  color: '#ffffff',
                }}
              >
                Associate Software Engineer
              </Text>
              <Text
                size={20}
                weight='bold'
                css={{
                  color: '#ffffff',
                }}
              >
                Revature (May 2023 - Dec 2023)
              </Text>
              <Text
                className='my-3 text-lg tracking-normal'
                weight='normal'
                css={{
                  color: '#ffffff',
                }}
              >
                Work with Agile methodology and actively participating in Scrum
                meetings as a part of SDLC to produce quality deliverables
                within deadlines. Design models with validation, services, and
                API controllers for data pertaining to domain using Spring Boot
                framework and JSON libraries, allowing data to be passed between
                front end to back end.
              </Text>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default resume;
