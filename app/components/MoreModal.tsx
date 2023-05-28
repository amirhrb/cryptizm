'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import IconButton from '../../helpers/mui-elements/IconButton';
import Drawer from '../../helpers/mui-elements/Drawer';

import DehazeIcon from '@mui/icons-material/Dehaze';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import StorefrontIcon from '@mui/icons-material/Storefront';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';

type Props = {
  navLinks: {
    fa: string[];
    en: string[];
  };
};

const MoreModal = ({ navLinks }: Props) => {
  const [active, setActive] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setActive(open);
  };

  const list = (
    <Box
      sx={{ width: '250px', maxWidth: '35vw' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.fa.map((text, index) => (
          <Link href={`${navLinks.en[index]}`} key={text}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text === 'درباره' ? (
                    <InfoIcon />
                  ) : text === 'مارکت' ? (
                    <StorefrontIcon />
                  ) : text === 'چارت ها' ? (
                    <QueryStatsIcon />
                  ) : (
                    ''
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Link href="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText>ورود</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton className="sm:hidden" onClick={() => setActive(true)}>
        <DehazeIcon color="primary" />
      </IconButton>
      <Drawer anchor="right" open={active} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </>
  );
};

export default MoreModal;
