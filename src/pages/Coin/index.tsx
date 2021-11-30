import React, { useState } from 'react';
import { Cell, Grid } from '@mollycule/lattice';
import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';
import { useSpring, animated, config } from 'react-spring';

import { ReactComponent as Trend } from '@assets/Trend.svg';
import Card from '@shared/components/Card';
import Stories from '@pages/Stories';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
}`;

const BuyDipButton = styled(Cell)`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 5s ease infinite;
  width: max-content;
  padding: 10px 20px;
  color: white;
`;

const Coin = () => {
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);

  const storiesProps = useSpring({
    opacity: isStoriesOpen ? 1 : 0,
    top: isStoriesOpen ? '0' : '100vh',
    config: config.stiff,
  });

  const openBuyTheDipStories = () => {
    setIsStoriesOpen(true);
  };

  const closeBuyTheDipStories = () => {
    setIsStoriesOpen(false);
  };

  return (
    <Grid pt="large" width="inherit" position="relative">
      <Cell>
        <Grid flow="column" justifyContent="space-between" px="20px">
          <Cell
            fontSize="30px"
            fontWeight="bold"
            lineHeight="40px"
            color="text1"
          >
            Bitcoin
            <Cell fontSize="34px" fontWeight="normal">
              £56,232
            </Cell>
          </Cell>
          <Cell className="pointer">
            <BuyDipButton
              borderRadius="xxlarge"
              fontWeight="600"
              onClick={openBuyTheDipStories}
            >
              Buy the Dip
            </BuyDipButton>
          </Cell>
        </Grid>
        <Cell pt="xxxlarge">
          <Trend width="100%" />
        </Cell>
        <Cell px="20px" pt="42px">
          <Grid
            flow="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Cell
              fontSize="12px"
              color="text1"
              backgroundColor="background2"
              px="6px"
              py="3px"
              borderRadius="small"
            >
              1D
            </Cell>
            <Cell fontSize="12px" color="text3">
              1W
            </Cell>
            <Cell fontSize="12px" color="text3">
              1M
            </Cell>
            <Cell fontSize="12px" color="text3">
              3M
            </Cell>
            <Cell fontSize="12px" color="text3">
              6M
            </Cell>
          </Grid>
        </Cell>
        <Cell px="20px" pt="24px" pb="24px">
          <Grid flow="column" alignItems="center" gap="9px">
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{ fontWeight: 'bold' }}
            >
              Buy
            </Button>
            <Button
              type="default"
              shape="round"
              size="large"
              style={{ fontWeight: 'bold' }}
            >
              Sell
            </Button>
          </Grid>
        </Cell>
      </Cell>

      <Cell height="100%" flex="1">
        <Cell px="20px" pt="28px">
          <Card title="My Holdings">
            <Grid pt="5px">
              <Cell>
                <Grid
                  flow="column"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Cell as="p">My BTC Holdings</Cell>
                  <Cell as="p" fontWeight="bold">
                    0.500000
                  </Cell>
                </Grid>
                <Grid
                  flow="column"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Cell as="p">My BTC value</Cell>
                  <Cell as="p" fontWeight="bold">
                    £28,116
                  </Cell>
                </Grid>
                <Grid
                  flow="column"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Cell as="p">Price per BTC</Cell>
                  <Cell as="p" fontWeight="bold">
                    £56,232
                  </Cell>
                </Grid>
              </Cell>
            </Grid>
          </Card>
          <Cell mt="16px">
            <Card title="Recent Activity">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Cell>
        </Cell>
      </Cell>
      {isStoriesOpen && (
        <Cell
          as={animated.div}
          position="fixed"
          width="inherit"
          height="100vh"
          backgroundColor="background1"
          style={storiesProps}
        >
          <Stories onClose={closeBuyTheDipStories} />
        </Cell>
      )}
    </Grid>
  );
};

export default Coin;
