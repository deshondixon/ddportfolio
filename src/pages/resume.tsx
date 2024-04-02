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
                ● Wrote clean, well-tested, advanced Python code using
                industry-standard software engineering patterns; studied the
                foundational structures of programming, from object-oriented
                principles to advanced topics. ● Other topics covered – Django,
                Docker, and Data Science.
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
                ● Played a crucial role in a significant project involving the
                migration of the ETF file process from Redwing and the
                subsequent Basket Creation for ETF Funds. ● Implemented Agile
                methodologies and streamlined the development process, leading
                to a 25% improvement in project turnaround time, ensuring prompt
                delivery of innovative features and enhancements to ETF Fund
                management. ● Designed and optimized data models, achieving a
                30% reduction in data transfer latency and a 40% increase in
                data accuracy, contributing to the superior performance of ETF
                Funds and bolstering client confidence.
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
                ● Work with Agile methodology and actively participate in Scrum
                meetings as a part of SDLC to produce quality deliverables
                within deadlines. ● Design models with validation, services, and
                API controllers for data pertaining to the domain using Spring
                Boot framework and JSON libraries, allowing data to be passed
                between front end to back end. ● Running unit tests (via JUnit)
                on finished products to ensure high quality standards and MVPs
                are met.
              </Text>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default resume;
