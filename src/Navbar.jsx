import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import  AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import TaskIcon from '@mui/icons-material/Task';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TaskIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </TaskIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}