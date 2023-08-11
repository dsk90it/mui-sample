import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const HeroBanner = styled(Box)(() => ({
  display: 'block',
  width: '100%',
  paddingTop: '32%',
  backgroundColor: '#dddddd',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginTop: '1rem',
}))

function BaseHero({ imageUrl }) {
  return (
    <HeroBanner
      sx={{ backgroundImage: `url(${imageUrl})`, paddingTop: { lg: '24%' } }}
    />
  )
}
export default BaseHero
