import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useAuthStore } from '../hooks';
import { useSelector } from 'react-redux';

const pages = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Carrito',
    path: '/carrito'
  },
];
const settings = ['Logout'];

export const Navbar = () => {
  const  { productsInCart } = useSelector(state => state.cart)
  
  const { startLogout } = useAuthStore();

  const logout = () => startLogout();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
  
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={["xs", "sm", "md", "xl"]}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({title}) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  {title}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({path, title}) => (
              <Button
                key={title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink style={{textDecoration: 'none', color: 'inherit'}} to={`${path}`}>{title}</NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={2}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={productsInCart.length} color="error">
                  <IconButton href='/carrito' color='white'>
                    <ShoppingCartIcon/>  
                  </IconButton>
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
            </Stack>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={ logout }>
                    <IconButton>
                      <ExitToAppIcon/>
                    </IconButton>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

