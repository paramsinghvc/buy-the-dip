import { useState } from 'react';

import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export enum Theme {
  Light,
  Dark,
}

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.Light);
  return {
    theme: currentTheme === Theme.Light ? lightTheme : darkTheme,
    setCurrentTheme,
  };
}
