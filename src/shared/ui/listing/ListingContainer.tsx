import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export const ListingContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        height: '100%',
        gap: '1rem',
        display: 'flex',
        flexDirection: 'column',

        '& .listingName': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      }}>
      {children}
    </Box>
  );
};
