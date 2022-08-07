import React from "react";
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";
const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(true);
  };
  const handleClose = () => {
      setAnchorEl(null)
  }
  return (
    <AppBar>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKIMONS
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" variant="text">
            About
          </Button>
          <Button color="inherit" variant="text">
            Pricing
          </Button>
          <Button color="inherit" variant="text">
            Contact
          </Button>
          <Button
           color='inherit'
           id='resources-button'
           aria-controls={open ? 'resources-menu' : undefined}
           aria-haspopup='true'
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}>
            Resources
          </Button>
        </Stack>
        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          MenuListProps={{
            'aria-labelledby': 'resources-button'
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
