import React, { FC, useRef, useState, useEffect } from 'react';
import { Cell, Grid } from '@mollycule/lattice';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '@assets/close.svg';
import { ReactComponent as Hourglass } from '@assets/hourglass.svg';
import { ReactComponent as Plant1 } from '@assets/plant-sprout.svg';
import { ReactComponent as Plant2 } from '@assets/plant-sprout-1.svg';
import { ReactComponent as Plant3 } from '@assets/pension-withdraw.svg';
import { ReactComponent as Stocks } from '@assets/stocks.svg';
import { ReactComponent as Dashboard } from '@assets/car-speed-panel.svg';
import { animationValue, timer } from '@shared/utils';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Inkbar = styled(Cell)`
  transition: all 0.1s;
`;

const ProgressInkbar: FC<{ percentage: number }> = ({ percentage = 0 }) => {
  return (
    <Cell
      height="3px"
      borderRadius="5px"
      position="relative"
      width="100%"
      background="#eee"
      overflow="hidden"
    >
      <Inkbar
        width={`${percentage}%`}
        position="absolute"
        left="0"
        top="0"
        height="3px"
        backgroundColor="text3"
      />
    </Cell>
  );
};

const data = [
  {
    title: 'Did you miss the dip? We can help with that... ',
    body: (
      <>
        Crypto markets tend to be more volatile than stocks and other assets.
        One reason is because, unlike most other assets, crypto trades 24/7
        every day of the year and across the world.{<br />}
        {<br />}
        So when is it the right time to buy?{<br />}
        {<br />}
        No one knows for sure...`
      </>
    ),
    art: (
      <Cell
        textAlign="end"
        position="absolute"
        right="0"
        bottom="-7px"
        zIndex="-1"
      >
        <Hourglass />
      </Cell>
    ),
  },
  {
    title: 'Enter dollar cost averaging.',
    body: (
      <>
        Many investors don’t track prices going up and down every minute.
        {<br />}
        {<br />}
        Instead, they just invest the same amount each week or month. This
        strategy is known as dollar cost averaging (DCA).
      </>
    ),
    art: (
      <Grid
        gap="10"
        flow="column"
        alignItems="end"
        position="absolute"
        bottom="70px"
        left="0"
        zIndex="-1"
        width="100%"
        justifyContent="space-around"
        px="30px"
      >
        <Plant1 />
        <Plant2 />
        <Plant3 />
      </Grid>
    ),
  },
  {
    title: 'You can use DCA to manage risk.',
    body: (
      <>
        Dollar cost averaging has two advantages. Firstly, you don't need a huge
        sum to start.
        {<br />}
        {<br />}
        Secondly, it allows you to take advantage of the long-term growth
        potential of an asset while being less affected by short-term
        volatility.
        {<br />}
        {<br />}
        DCA smooths out the risk (hence "averaging"), though it doesn't remove
        all risk.
      </>
    ),
    art: (
      <Grid
        position="absolute"
        bottom="70px"
        left="0"
        zIndex="-1"
        width="100%"
        justifyContent="space-around"
        px="30px"
      >
        <Stocks />
      </Grid>
    ),
  },
  {
    title: 'Dollar cost average with recurring buys. ',
    body: (
      <>
        Want to take advantage of dollar cost averaging to steadily grow your
        crypto wealth?{<br />}
        {<br />}
        Set up a daily, weekly or monthly recurring buy and start stacking
        crypto on autopilot.{' '}
      </>
    ),
    art: (
      <Grid
        position="absolute"
        bottom="70px"
        left="0"
        width="100%"
        justifyContent="center"
        px="30px"
        alignItems="center"
        gap="100px"
      >
        <Cell position="relative" zIndex="-1">
          <Dashboard />
        </Cell>
        <Cell zIndex="2" textAlign="center">
          <Link to="/buy-the-dip">
            <Button type="primary" size="large" shape="round">
              Setup buy the dip
            </Button>
          </Link>
        </Cell>
      </Grid>
    ),
  },
];

const DURATION = 4000;

const Stories: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentTile, setCurrentTile] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentTimer = useRef<ReturnType<typeof timer>>();

  const isFirstTile = currentTile === 0;
  const isLastTile = currentTile === data.length - 1;

  useEffect(() => {
    animationValue(DURATION, 100, setProgress);
    if (currentTile <= 2) {
      currentTimer.current?.clear?.();
      currentTimer.current = timer(() => {
        !isLastTile && setCurrentTile(currentTile + 1);
      }, DURATION);
    }
  }, [currentTile, isLastTile]);

  const handleNextTile = () => {
    if (!isLastTile) {
      setCurrentTile((currentTile) => currentTile + 1);
    }
  };

  const handlePrevTile = () => {
    if (!isFirstTile) {
      setCurrentTile((currentTile) => currentTile - 1);
    }
  };

  return (
    <Grid>
      <Cell>
        <Grid px="24px" py="35px">
          <Cell>
            <Grid flow="column" justifyContent="space-between">
              <Cell as="span" fontWeight="bold">
                Buy the dip
              </Cell>
              <Cell color="text1" className="pointer" onClick={onClose}>
                <CloseIcon />
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid
              gap="10px"
              flow="column"
              width="100%"
              justifyContent="stretch"
              pt="10px"
            >
              {Array(data.length)
                .fill(0)
                .map((_, i) => (
                  <ProgressInkbar
                    key={i}
                    percentage={
                      currentTile === i ? progress : currentTile > i ? 100 : 0
                    }
                  />
                ))}
            </Grid>
          </Cell>
          <Cell mt="40px">
            <Cell as="h2" fontWeight="bold" fontSize="30px">
              {data[currentTile].title}
            </Cell>
            <Cell as="p">{data[currentTile].body}</Cell>
            {data[currentTile].art}
          </Cell>
          <Grid
            position="absolute"
            top="100px"
            width="100%"
            height="calc(100vh - 100px)"
            zIndex="1"
            flow="column"
          >
            <Cell
              height="100%"
              // background="rgba(0, 0,0, 0.5)"
              onClick={handlePrevTile}
            />
            <Cell
              height="100%"
              // background="#da62627f"
              onClick={handleNextTile}
            />
          </Grid>
        </Grid>
      </Cell>
    </Grid>
  );
};

export default Stories;
