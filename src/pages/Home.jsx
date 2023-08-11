import { Container } from '@mui/material'
import BaseHero from '../components/base/BaseHero'
import NavBar from '../components/composites/NavBar'
import banner from '../assets/banner.jpg'
import FilterSection from '../components/composites/FilterSection'
import GridSection from '../components/composites/GridSection'

function Home() {
  return (
    <div>
      <NavBar />

      <Container maxWidth="false" sx={{ pb: 6 }}>
        <BaseHero imageUrl={banner} />
        <FilterSection />
        <GridSection items={[...Array(12)]} />
      </Container>
    </div>
  )
}
export default Home
