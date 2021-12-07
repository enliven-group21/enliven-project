import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// MUI Stuff
import { InputBase, alpha, IconButton, Button, Menu, MenuItem, Box, AppBar, Toolbar, Tooltip } from '@material-ui/core'
import { useAuth } from '../contexts/AuthContext'

// Icons
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import ArticleIcon from '@mui/icons-material/Article'
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';

// Logo
import enlivenLogo from '../enlivenNoBack.png';

// Styling
import { styled } from '@material-ui/styles';

const Search = styled('div')(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5), // The Background Color of the box around the User Search
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.75) // The Background Color of the box around the User Search when hovered
  },
  width: "15%",
  [theme.breakpoints.down("xs")]: {
    borderRadius: 18,
    width: "10%"
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, .8),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center"
}));

// The "Search..." in the NavBar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 5),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "40ch"
    }
  }
}));


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [error, setError] = React.useState('')
  const { signout } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const history = useHistory();

  const handleFriendsRoute = () => {
    history.push('/friends');
  }

  const handleProfileRoute = () => {
    history.push('/profile');
  }

  const handleHomeRoute = () => {
    history.push('/');
  }

  const handleAboutUsRoute = () => {
    history.push('/aboutus');
  }

  const handleNewsRoute = () => {
    history.push('/news');
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  async function handleLogout() {
    try {
      setError('')
      await signout();
      console.log('User signed out');
      history.push('/login')
    } catch (error) {
      console.log(error);
      setError('Failed to log out: ' + error);
    }
  }

  // Drop down menu for regular screens (not mobile) / no zoom
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfileRoute} style={{ marginLeft: 'auto' }}>
        <IconButton size="large"
          aria-haspopup="true"
          color="inherit"
          style={{ marginLeft: -5 + '%', backgroundColor: 'transparent' }} >
          <AccountCircle />
        </IconButton>
        Profile
      </MenuItem>

      <MenuItem onClick={handleLogout} style={{ marginLeft: 'auto' }} >
        <IconButton size="large"
          aria-haspopup="true"
          color="inherit"
          style={{ marginLeft: -5 + '%', backgroundColor: 'transparent' }} >
          <LogoutIcon />
        </IconButton>
        Log Out
      </MenuItem>

    </Menu>
  );

  // Drop down Menu for small screens (mobile) / zoomed in
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      style={{ margin: 'auto' }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileRoute} >
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          style={{ marginLeft: -5 + '%', backgroundColor: 'transparent' }}>
          <AccountCircle />
        </IconButton>
        Profile
      </MenuItem>

      {/* <MenuItem onClick={handleFriendsRoute} disabled>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          style={{ marginLeft: -5 + '%', backgroundColor: 'transparent' }}>
          <PeopleIcon />
        </IconButton>
        Friends
      </MenuItem> */}

      <MenuItem onClick={handleHomeRoute}>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          style={{ marginLeft: -5 + '%', backgroundColor: 'transparent' }}>
          <HomeIcon />
        </IconButton>
        Home
      </MenuItem>

      <MenuItem onClick={handleNewsRoute}  >
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          style={{ marginLeft: -5 + '%', backgroundColor: 'transparent' }} >
          <ArticleIcon />
        </IconButton>
        News
      </MenuItem>

      <MenuItem onClick={handleAboutUsRoute} >
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          style={{ marginLeft: -5 + '%', backgroundColor: 'transparent' }}>
          <InfoIcon />
        </IconButton>
        About Us
      </MenuItem>

      <MenuItem onClick={handleLogout} style={{ marginLeft: 'auto' }} >
        <IconButton size="large"
          aria-haspopup="true"
          color="inherit"
          style={{ marginLeft: -5 + '%', backgroundColor: 'transparent' }} >
          <LogoutIcon />
        </IconButton>
        Log Out
      </MenuItem>

    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* The Logo on Left side of NavBar */}
          <img src={enlivenLogo} alt='...' draggable={false} style={{ marginRight: -2 + '%', marginLeft: -3.3 + '%', marginTop: -3.3 + '%', marginBottom: -3.3 + '%', width: 8 + '%' }} />


          {/* The Name of the Page to the right of Menu button  */}
          {/* <Typography variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }} >
              Enliven
            </Typography> */}

          {/* The search box inside of the NavBar for finding friends (WIP)*/}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search Friends (WIP)…" inputProps={{ 'aria-label': 'search' }} disabled />
          </Search> */}

          {/* Empty Box to compensate for searchbar being removed */}
          <Box sx={{flexGrow: .35}} />


          {/* Top Page Buttons */}
          <Box style={{ marginLeft: 25 + '%' }} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* Home Button */}
            <Tooltip title="Home">
              <Button size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                component={Link} to="/">
                <HomeIcon />
              </Button>
            </Tooltip>

            {/* News Button */}
            <Tooltip title="News">
              <Button size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                component={Link} to="/news">
                <ArticleIcon />
              </Button>
            </Tooltip>

            {/* Friends Button (WIP) */}
            {/* <Tooltip title="WIP">
              <Button size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                component={Link} to="/friends"
                disabled>
                <PeopleIcon />
              </Button>
            </Tooltip> */}

            {/* About Us Button */}
            <Tooltip title="About Us">
              <Button size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                component={Link} to="/aboutus">
                <InfoIcon />
              </Button>
            </Tooltip>
          </Box>


          <Box sx={{ flexGrow: 1 }} />

          {/* The Left hand menu when screen is normal size */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* The Account Circle Button (Right hand side) */}
            <IconButton size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit" >
              <AccountCircle />
            </IconButton>
          </Box>

          {/* The drop down menu (3 line Left side) when screen is small */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit" >
              <MenuIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Small Screen (mobile) / Zoomed in  3 dot button drop down menu*/}
      {renderMobileMenu}

      {/* Account Circle (Right Side) Button Drop down menu */}
      {renderMenu}

    </Box>
  );
}


