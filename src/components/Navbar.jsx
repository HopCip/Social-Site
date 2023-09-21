import React from 'react'
import { useState } from 'react'
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  MenuItem,
  Menu,
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import PetsIcon from '@mui/icons-material/Pets'
import NotificationsIcon from '@mui/icons-material/Notifications'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled('div')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

const UserBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false)
  const cursorStyles = {
    cursor: 'pointer',
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          style={cursorStyles}
          sx={{ display: { xs: 'none', sm: 'block' } }}
          onClick={scrollToTop}
        >
          SOCIALS
        </Typography>
        <PetsIcon
          style={cursorStyles}
          sx={{ display: { xs: 'block', sm: 'none' } }}
          onClick={scrollToTop}
        />
        <Search>
          <InputBase placeholder="search"></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error" style={cursorStyles}>
            <MailIcon style={cursorStyles} />
          </Badge>
          <Badge badgeContent={2} color="error" style={cursorStyles}>
            <NotificationsIcon style={cursorStyles} />
          </Badge>
          <Avatar
            style={cursorStyles}
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={() => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox style={cursorStyles} onClick={() => setOpen(true)}>
          <Avatar
            style={cursorStyles}
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          ></Avatar>
          <Typography variant="span">Jozo</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Pages</MenuItem>
        <MenuItem>Groups</MenuItem>
        <MenuItem>Friends</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          Dark mode
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
