import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;Пират-фильм&raquo; <br />
        Тут какое-то бла бла бла про то, что нам все равно на права. <br />
      </Typography>

      <Typography variant="h5" color="primary.main">
        Пират-фильм
      </Typography>
    </Stack>
  );
}
