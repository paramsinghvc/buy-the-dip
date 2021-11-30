import React from 'react';
import { Grid, Cell } from '@mollycule/lattice';

import { ReactComponent as ChevronLeft } from '@assets/chevron-left.svg';
import { Button, Input, Select } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const BuyTheDip = () => {
  return (
    <Grid
      justifyContent="space-between"
      alignItems="start"
      p="24px"
      height="100vh"
    >
      <Cell>
        <Link to="/" className="pointer">
          <ChevronLeft />
        </Link>
        <Cell fontWeight="bold" fontSize="30px" lineHeight="36px" pt="40px">
          <span>Buy </span>{' '}
          <Input
            size="large"
            defaultValue="100"
            prefix="£"
            style={{ width: 100 }}
            autoFocus
          />
          <span>of Bitcoin every time it dips</span>
          <Select defaultValue="10" style={{ width: 70 }}>
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
            defaultValue="500"
            prefix="£"
            style={{ width: 100 }}
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
        >
          Review
        </Button>
      </Cell>
    </Grid>
  );
};

export default BuyTheDip;
