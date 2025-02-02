import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { navigationConfig } from '../router';

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
}

export function NavigationMenu({ isOpen, onClose }: Props) {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
        <List>
          {navigationConfig.map(({ path, label }) => (
            <ListItem key={path} component={Link} to={path}>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
