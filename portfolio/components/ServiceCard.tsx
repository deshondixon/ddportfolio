import React, { FunctionComponent } from 'react';
import { IService } from '../type';
import { Text } from '@nextui-org/react';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  return (
    <div>
      <Icon />
      <div>
        <Text>{title}</Text>
        <Text>{about}</Text>
      </div>
    </div>
  );
};

export default ServiceCard;
