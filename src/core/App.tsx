import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import BuyTheDip from '@pages/BuyTheDip';
import Coin from '@pages/Coin';
import { useTheme } from './theme/useTheme';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #fff;
  @media screen and (min-width: 375px) {
    width: 375px;
    margin: 0 auto;
  }
`;

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Coin />} />
            <Route path="buy-the-dip" element={<BuyTheDip />} />
            <Route path="*" element={<Coin />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
