'use client';

import { DrawerProps, ThemeProvider } from '@mui/material';
import { Drawer } from '@mui/material';
import useTheme from './useTheme';

const ClientSideDrawer = (props: DrawerProps) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Drawer {...props}>{props.children}</Drawer>
    </ThemeProvider>
  );
};

export default ClientSideDrawer;
