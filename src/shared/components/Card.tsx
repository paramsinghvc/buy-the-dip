import React, { FC } from 'react';
import { Cell, CellBaseProps } from '@mollycule/lattice';
import styled from 'styled-components';

const BlurredCard = styled(Cell)`
  background-color: #f0f8ff52;
  backdrop-filter: blur(5px);
`;

const Card: FC<CellBaseProps & { title?: string }> = ({
  children,
  color,
  title,
  ...boxProps
}) => {
  return (
    <BlurredCard
      borderRadius="xlarge"
      p="xxlarge"
      backgroundColor="background1"
      {...boxProps}
    >
      {title && (
        <Cell fontSize="18px" fontWeight="bold" pb="12px">
          {title}
        </Cell>
      )}
      {children}
    </BlurredCard>
  );
};

export default Card;
