import React from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Tooltip from '@mui/material/Tooltip'

const Post = ({ name, date, image, text, profilePicture, backgroundColor }) => {
  const cursorStyles = {
    cursor: 'pointer',
  }

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Tooltip title={name}>
            <Avatar
              sx={{ bgcolor: { backgroundColor } }}
              aria-label="recipe"
              style={cursorStyles}
            >
              {profilePicture}
            </Avatar>
          </Tooltip>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={image}
        alt="Paella dish"
        style={cursorStyles}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
