//import React from 'react'
import './App.css'
import LandingPageHandler from './components/LandingPageHandler/LandingPageHandler'
import { Box } from '@mui/material'

function App() {

  return (
    <>

      <Box
        sx={{ position: 'sticky' }}
      >
        <LandingPageHandler />
      </Box>
    </>
  )
}

export default App
