import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { onlineFriends } from '../data/onlineFriends'
import { latestChats } from '../data/latestChats'
import Tooltip from '@mui/material/Tooltip'

const Rightbar = () => {
  const [friends, setFriends] = useState(onlineFriends)
  const [chats, setChats] = useState(latestChats)
  const cursorStyles = {
    cursor: 'pointer',
  }

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', lg: 'block' }, marginLeft: 0 }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup
          style={cursorStyles}
          max={8}
          sx={{ display: 'flex', justifyContent: 'start', marginTop: 1 }}
        >
          {friends.map((one) => {
            return (
              <Tooltip title={one.name} key={one.id}>
                <Avatar style={cursorStyles} alt={one.name} src={one.image} />
              </Tooltip>
            )
          })}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList
          cols={2}
          gap={5}
          sx={{
            paddingRight: 2,
          }}
        >
          <ImageListItem>
            <img
              style={cursorStyles}
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              style={cursorStyles}
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Converstions
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {chats.map((one) => {
            return (
              <ListItem alignItems="flex-start" key={one.maxWidth}>
                <ListItemAvatar>
                  <Tooltip title={one.name}>
                    <Avatar
                      alt={one.name}
                      src={one.image}
                      style={cursorStyles}
                    />
                  </Tooltip>
                </ListItemAvatar>
                <ListItemText
                  primary={one.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {one.name}
                      </Typography>
                      {` - ${one.text}`}
                    </React.Fragment>
                  }
                />
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
