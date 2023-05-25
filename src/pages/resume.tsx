import { Text, Progress } from '@nextui-org/react';
import { languages } from '../data';
import { tools } from '../data';
import Bar from '../../components/Bar';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from '../animations';

const resume = () => {
  return (
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
                color: 'gray100',
              }}
            >
              Advanced Software Development in Python
            </Text>
            <Text
              size={20}
              weight='bold'
              css={{
                color: 'gray100',
              }}
            >
              Code Fellows (2022-2023)
            </Text>
            <Text
              className='my-3 text-lg tracking-normal'
              weight='normal'
              css={{
                color: 'gray100',
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
                color: 'gray100',
              }}
            >
              Breakline Software Engineer Participant
            </Text>
            <Text
              size={20}
              weight='bold'
              css={{
                color: 'gray100',
              }}
            >
              Breakline (2023-)
            </Text>
            <Text
              className='my-3 text-lg tracking-normal'
              weight='normal'
              css={{
                color: 'gray100',
              }}
            >
              BreakLine provides education and coaching for exceptional, women,
              people of color, people with disabilities, and veterans who are
              interested in accelerating into the next phase of their careers.
              Sessions include hands-on workshops, in-depth discussions with
              industry leaders, and an inside look at top companies.
            </Text>

            <Text
              size={20}
              weight='bold'
              css={{
                color: 'gray100',
              }}
            >
              Associate Software Engineer
            </Text>
            <Text
              size={20}
              weight='bold'
              css={{
                color: 'gray100',
              }}
            >
              Revature (2023-)
            </Text>
            <Text
              className='my-3 text-lg tracking-normal'
              weight='normal'
              css={{
                color: 'gray100',
              }}
            >
              BreakLine provides education and coaching for exceptional, women,
              people of color, people with disabilities, and veterans who are
              interested in accelerating into the next phase of their careers.
              Sessions include hands-on workshops, in-depth discussions with
              industry leaders, and an inside look at top companies.
            </Text>
          </div>
        </motion.div>

        <div>
          <Text
            className='my-3 text-lg tracking-normal'
            weight='normal'
            css={{
              color: 'gray100',
            }}
          >
            Languages & Frameworks
          </Text>
          <div className='my-3'>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <Text
            className='my-3 text-lg tracking-normal'
            weight='normal'
            css={{
              color: 'gray100',
            }}
          >
            Tools & Software
          </Text>
          <div className='my-3'>
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
