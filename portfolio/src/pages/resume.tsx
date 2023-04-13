import { Text } from '@nextui-org/react';
import { languages } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/data';
import { tools } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/data';
import Bar from '../../components/Bar';

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

        <div>
          <Text className='my-3 text-lg tracking-normal' weight='normal'>
            Languages & Frameworks
          </Text>
          <div className='my-3'>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <Text className='my-3 text-lg tracking-normal' weight='normal'>
            Tools & Software
          </Text>
          <div className='my-3'>
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
