'use client'


import { SignIn } from '@clerk/nextjs'
import {
  AppBar, 
  Box, 
  Button, 
  Container, 
  Toolbar, 
  Link, 
  Typography
} from '@mui/material'


export default function SignUpPage() {
  return (
      <Container maxWidth='100vw'>
      <AppBar position="static" sx={{backgroundColor: '#3f51b5'}}>
          <Toolbar>
          <Typography 
              variant="h6"
              sx={{flexGrow: 1}}
          >   
              Flashcards AI
          </Typography>
          <Button color="inherit">
              <Link href='/sign-in'>
                  Login
              </Link>
          </Button>
          <Button color="inherit">
              <Link href='/sign-up'>
                  Sign Up
              </Link>
          </Button>
          </Toolbar>
      </AppBar>
      <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
      >
          <Typography variant="h4">Sign In</Typography>
          <SignIn />
      </Box>
      </Container>
  )
}