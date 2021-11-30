import React, { FC } from 'react';
import { Cell, CellBaseProps } from '@mollycule/lattice';

const Card: FC<CellBaseProps & { title?: string }> = ({
  children,
  color,
  title,
  ...boxProps
}) => {
  return (
    <Cell
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
    </Cell>
  );
};

export default Card;
