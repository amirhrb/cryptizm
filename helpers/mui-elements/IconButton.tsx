'use client';

import { ExtendButtonBase, ThemeProvider } from '@mui/material';
import useTheme from './useTheme';
import IconButton, {
  IconButtonTypeMap,
} from '@mui/material/IconButton/IconButton';

const ClientSideIconButton: ExtendButtonBase<
  IconButtonTypeMap<{}, 'button'>
> = ({ children, ...props }: any) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <IconButton {...props}>{children}</IconButton>
    </ThemeProvider>
  );
};

export default ClientSideIconButton;
