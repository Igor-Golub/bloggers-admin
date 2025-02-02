import { Menu } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';

interface Props {
  onOpen: VoidFunction;
}

export function Header({ onOpen }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton onClick={onOpen}>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
