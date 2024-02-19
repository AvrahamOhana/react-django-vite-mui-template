import React from 'react'
import Box from '@mui/material/Box'
const Home = () => {
  return (
    <div>
     <Box
        sx={{
          boxShadow: 3,
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        boxShadow: 3
      </Box>
    </div>
  )
}

export default Home
