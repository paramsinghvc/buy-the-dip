import React, { useState } from 'react';
import { Grid, Cell } from '@mollycule/lattice';

import { ReactComponent as ChevronLeft } from '@assets/chevron-left.svg';
import { Button, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from '@react-spring/web';
import Review from './Review';

const { Option } = Select;

const BuyTheDip = () => {
  const [dipAmount, setDipAmount] = useState('100');
  const [dipPerc, setDipPerc] = useState(10);
  const [dipLimit, setDipLimit] = useState('500');

  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const storiesProps = useSpring({
    opacity: isReviewOpen ? 1 : 0,
    top: isReviewOpen ? '0' : '100vh',
    config: config.stiff,
  });

  return (
    <Grid
      justifyContent="space-between"
      alignItems="start"
      p="24px"
      height="100vh"
      width="inherit"
      position="relative"
    >
      <Cell>
        <Link to="/" className="pointer">
          <ChevronLeft />
        </Link>
        <Cell fontWeight="bold" fontSize="30px" lineHeight="36px" pt="40px">
          <span>Buy </span>{' '}
          <Input
            size="large"
            prefix="£"
            style={{ width: 100 }}
            autoFocus
            value={dipAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDipAmount(e.target.value)
            }
          />
          <span>of Bitcoin every time it dips</span>
          <Select
            style={{ width: 70 }}
            value={dipPerc}
            onChange={(val) => setDipPerc(val)}
          >
            <Option value="5">5%</Option>
            <Option value="10">10%</Option>
            <Option value="20">20%</Option>
            <Option value="30">30%</Option>
            <Option value="40">40%</Option>
            <Option value="50">50%</Option>
          </Select>
          <br />
          <br />
          <span>But don't buy more than </span>
          <Input
            size="large"
            prefix="£"
            style={{ width: 100 }}
            value={dipLimit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDipLimit(e.target.value)
            }
          />
          <span> in a month.</span>
        </Cell>
      </Cell>
      <Cell alignSelf="end">
        <Button
          type="primary"
          shape="round"
          size="large"
          className="full-width"
          onClick={() => setIsReviewOpen(true)}
          style={{ fontWeight: 'bold' }}
        >
          Review
        </Button>
      </Cell>

      <Cell
        as={animated.div}
        position="fixed"
        width="inherit"
        height="100vh"
        backgroundColor="background1"
        style={storiesProps}
      >
        <Review
          onClose={() => setIsReviewOpen(false)}
          data={{ dipAmount, dipPerc, dipLimit }}
        />
      </Cell>
    </Grid>
  );
};

export default BuyTheDip;
