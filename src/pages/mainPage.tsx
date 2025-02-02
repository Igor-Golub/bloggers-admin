import { Box, Typography } from '@mui/material';

export function MainPage() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Typography variant="h1" color="textSecondary">
        Welcome to Bloggers admit panel
      </Typography>
    </Box>
  );
}
