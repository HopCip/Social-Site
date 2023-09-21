import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

import { dataFeeds } from '../data/dataFeeds'
import { useState } from 'react'

const Feed = () => {
  const [people, setPeople] = useState(dataFeeds)
  return (
    <Box flex={4} sx={{ p: { xs: 0, md: 1, lg: 2 } }}>
      {dataFeeds.map((oneFeed) => {
        return <Post key={oneFeed.id} {...oneFeed}></Post>
      })}
    </Box>
  )
}

export default Feed
