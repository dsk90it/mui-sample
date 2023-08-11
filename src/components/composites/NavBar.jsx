import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material'
import BaseSearch from '../base/BaseSearch'
import AppsIcon from '@mui/icons-material/Apps'

function NavBar({ userImage, userName }) {
  return (
    <AppBar
      position="sticky"
      sx={{ boxShadow: 'none', padding: '0.5rem 1rem' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: { sm: 'auto' },
        }}
      >
        <BaseSearch handleChange={(e) => console.log(e.target.value)} isDark />

        <Toolbar
          sx={{
            paddingRight: '0 !important',
            minHeight: 'auto !important',
          }}
        >
          <IconButton color="inherit">
            <AppsIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <IconButton color="inherit">
            <Avatar
              alt={userName}
              sx={{ width: 32, height: 32 }}
              src={userImage}
            />
          </IconButton>
        </Toolbar>
      </Box>
    </AppBar>
  )
}
export default NavBar
