import { useMemo } from 'react';
import { createTheme } from '@mui/material';
import useDark from '../hooks/useDark';
import { Lalezar } from 'next/font/google';

const lalezar = Lalezar({
  subsets: ['arabic'],
  weight: '400',
});

const useTheme = () => {
  const isDark = useDark();
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: {
            main: '#f6a524',
          },
        },
        typography: {
          fontFamily: lalezar.style.fontFamily,
        },
      }),
    [isDark]
  );
  return theme;
};

export default useTheme;
