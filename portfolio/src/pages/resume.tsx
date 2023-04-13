import { Text } from '@nextui-org/react';

const resume = () => {
  return (
    <div className='px-6 py-2'>
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
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
            <Text size={20} weight='bold'>
              Advanced Software Development in Python
            </Text>
            <Text size={20} weight='bold'>
              Code Fellows (2022-2023)
            </Text>
            <Text className='my-3 text-lg tracking-normal' weight='normal'>
              Wrote clean, well-tested, advanced Python code using
              industry-standard software engineering patterns; studied the
              foundational structures of programming, from object-oriented
              principles to advanced topics
            </Text>
          </div>
        </div>
        <div>
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
            <Text size={20} weight='bold'>
              Breakline Software Engineer Participant
            </Text>
            <Text size={20} weight='bold'>
              Breakline (2023-)
            </Text>
            <Text className='my-3 text-lg tracking-normal' weight='normal'>
              BreakLine provides education and coaching for exceptional, women,
              people of color, people with disabilities, and veterans who are
              interested in accelerating into the next phase of their careers.
              Sessions include hands-on workshops, in-depth discussions with
              industry leaders, and an inside look at top companies.
            </Text>
          </div>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <Text className='my-3 text-lg tracking-normal' weight='normal'>
              Languages & Frameworks
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
