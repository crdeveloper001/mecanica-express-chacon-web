//import React from 'react'
import './App.css'
import LandingPageHandler from './components/LandingPageHandler/LandingPageHandler'
import { Box } from '@mui/material'

function App() {

  return (
    <>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      >
        <LandingPageHandler />
      </Box>
    </>
  )
}

export default App
