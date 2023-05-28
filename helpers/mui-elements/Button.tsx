'use client';

import Button from '@mui/material/Button/Button';
import { ButtonTypeMap, ExtendButtonBase, ThemeProvider } from '@mui/material';
import useTheme from './useTheme';

const ClientSideButton: ExtendButtonBase<ButtonTypeMap<{}, 'button'>> = ({
  children,
  ...props
}: any) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}>{children}</Button>
    </ThemeProvider>
  );
};

export default ClientSideButton;
