import React, { FC } from 'react';
import { Grid, Cell } from '@mollycule/lattice';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

// import { ReactComponent as UploadIcon } from '@assets/Upload.svg';

const ItemRow: FC<{
  title: string;
  subtitle?: React.ReactNode;
  value: string | number;
  isLast?: boolean;
}> = ({ title, subtitle, value, isLast }) => (
  <Grid
    cols={2}
    gap="4px"
    borderBottom={!isLast ? '1px solid' : 'none'}
    borderColor="divider"
    pb="16px"
  >
    <Cell>{title}</Cell>
    <Cell justifySelf="end">{value}</Cell>
    <Cell y-offset="2" fontSize="14px" color="text3">
      {subtitle}
    </Cell>
  </Grid>
);
const Review: FC<{
  onClose: () => void;
  data: {
    dipAmount: string;
    dipPerc: number;
    dipLimit: string;
  };
}> = ({ onClose, data: { dipAmount, dipPerc, dipLimit } }) => {
  return (
    <Grid pt="24px" pr="48px" justifyContent="space-between" height="100%">
      <Cell>
        <Cell>
          <Button
            type="link"
            onClick={onClose}
            size="large"
            style={{ padding: 0 }}
          >
            Edit
          </Button>
        </Cell>
        <Cell pt="5px">
          <Cell as="h2" fontSize="30px" fontWeight="bold">
            Buy the dip
          </Cell>
        </Cell>
        <Cell>
          <Grid gap="20px">
            <ItemRow
              title="Amount to purchase"
              subtitle="Includes a 1% fee "
              value={`£${dipAmount}`}
            />
            <ItemRow title="Asset" value="Bitcoin" />
            <ItemRow
              title="Percentage dip"
              subtitle="Purchase triggered if 
            price dips 10% or more"
              value={`${dipPerc}%`}
            />
            <ItemRow
              title="Maximum amount"
              subtitle="Maximum amount bought this calendar month dependant on available funds."
              value={`£${dipLimit}`}
              isLast={true}
            />
          </Grid>
        </Cell>
      </Cell>
      <Cell justifySelf="end" alignSelf="end" pb="40px">
        <Cell fontSize="12px" color="text3" textAlign="center" pb="40px">
          Orders are executed at around 2am every day. The exact rate for your
          trade is determined at time of execution.
        </Cell>
        <Cell display="flex" alignItems="center">
          <Link to="/" style={{ width: '100%' }}>
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{ width: '100%', fontWeight: 'bold' }}
            >
              Submit
            </Button>
          </Link>
        </Cell>
      </Cell>
    </Grid>
  );
};

export default Review;
