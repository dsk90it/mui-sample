import { AppBar } from '@mui/material'
import BaseSearch from '../base/BaseSearch'

function NavBar() {
  return (
    <AppBar
      position="sticky"
      sx={{ boxShadow: 'none', padding: '0.5rem 1rem' }}
    >
      <BaseSearch handleChange={(e) => console.log(e.target.value)} isDark />
    </AppBar>
  )
}
export default NavBar
