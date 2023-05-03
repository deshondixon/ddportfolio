import React from 'react';
import {
  Avatar,
  Row,
  Col,
  Text,
  Button,
  Spacer,
  Grid,
} from '@nextui-org/react';

export const UserCard = ({
  avatarUrl,
  avatarProps,
  css,
  onClick,
  ...props
}) => {
  const [following, setFollowing] = React.useState(false);

  return (
    <Grid.Container
      className='flex flex-wrap items-center user-twitter-card__container'
      css={{
        mw: '150px',
        padding: '$lg',
        ...css,
      }}
      onClick={onClick}
      {...props}
    >
      <Text className='user-twitter-card__text' size={15}>
        Hello, World! 👋
        <Text
          className='user-twitter-card__text'
          size={14}
          css={{ mt: '$1' }}
          color='#888888'
        >
          Currently busy coding but feel free to reach out anytime!
        </Text>
      </Text>
    </Grid.Container>
  );
};
