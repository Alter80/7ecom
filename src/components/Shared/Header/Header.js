import { faBars, faHome, faList, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Box, Button, Container, Divider, Fade, IconButton, Menu, MenuItem, Tooltip, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { getAuth, signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const headerStyles = makeStyles({
  headerButton: {
    color: 'black !important'
  }
});

const Header = () => {
  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const matches960px = useMediaQuery('(min-width:960px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      setLoggedInUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('displayName');
      localStorage.removeItem('email');
      localStorage.removeItem('photoURL');
      alert("Logged out successfully!");
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  const { headerButton } = headerStyles();
  return (
    <Container maxWidth="xl">
      <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
        <Box sx={{ color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/">
            <Box sx={{ px: 1, py: 3, fontSize: 24, pr: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ fontSize: '37px' }}>
                  7eCom
                </Box>
              </Box>
            </Box>
          </Link>
          <Box sx={{ padding: 1 }}>
            {
              matches960px &&
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to="/"><Button className={headerButton}>Home</Button></Link>
                <Link to="/explore"><Button className={headerButton}>Explore</Button></Link>

                <Link to="/"><Button
                  className={headerButton}
                  id="fade-button"
                  aria-controls={open ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>Categories</Button></Link>

                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}> <Link to="/mensware">Mens Cloathing </Link></MenuItem>
                  <MenuItem onClick={handleClose}> <Link to="/womensware">Womens Cloathing </Link></MenuItem>
                  <MenuItem onClick={handleClose}> <Link to="/electronics">Electronics </Link></MenuItem>
                  <MenuItem onClick={handleClose}> <Link to="/allproducts">Browse More </Link></MenuItem>

                </Menu>

                {
                  !loggedInUser &&
                  <Link to="/login"><Button className={headerButton}>Login</Button></Link>
                }
                {
                  loggedInUser &&
                  <>
                    <Box sx={{ px: 1, fontWeight: 500 }}>{loggedInUser.displayName}</Box>
                    <Button className={headerButton} onClick={handleLogOut}>Logout</Button>
                  </>
                }
              </Box>
            }
            {
              !matches960px &&
              <Box>
                <Tooltip title="Menu">
                  <IconButton onClick={handleClick} size="small" sx={{ ml: 2, p: 1, fontSize: "24px" }}>
                    <FontAwesomeIcon icon={faBars} />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <Link to="/">
                    <MenuItem>
                      <Avatar>
                        <FontAwesomeIcon icon={faHome} />
                      </Avatar> Home
                    </MenuItem>
                  </Link>
                  <Link to="/explore">
                    <MenuItem>
                      <Avatar>
                        <FontAwesomeIcon icon={faList} />
                      </Avatar> Explore
                    </MenuItem>
                  </Link>
                  <Link to="/categories">
                    <MenuItem>
                      <Avatar id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <FontAwesomeIcon icon={faList} />
                      </Avatar> All Categories
                    </MenuItem>
                  </Link>
                  <Divider />
                  {
                    !loggedInUser &&
                    <Link to="/login">
                      <MenuItem>
                        <Avatar>
                          <FontAwesomeIcon icon={faSignInAlt} />
                        </Avatar> Login
                      </MenuItem>
                    </Link>
                  }
                  {
                    loggedInUser &&
                    <>
                      <MenuItem>
                        <Avatar /> {loggedInUser.displayName}
                      </MenuItem>
                      <MenuItem onClick={handleLogOut}>
                        <Avatar>
                          <FontAwesomeIcon icon={faSignOutAlt} />
                        </Avatar> Logout
                      </MenuItem>
                    </>
                  }
                </Menu>
              </Box>
            }
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;