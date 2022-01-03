import { faBars, faHome, faList, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Box, Button, Divider, IconButton, Menu, MenuItem, Tooltip, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const headerStyles = makeStyles({
  headerButton: {
    color: 'black !important'
  }
});

const Header = () => {
  const matches960px = useMediaQuery('(min-width:960px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { headerButton } = headerStyles();
  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
      <Box sx={{ color: 'black', bgcolor: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
              <Link to="/login"><Button className={headerButton}>Login</Button></Link>
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
                <Divider />
                <Link to="/login">
                  <MenuItem>
                    <Avatar>
                      <FontAwesomeIcon icon={faSignInAlt} />
                    </Avatar> Login
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Header;