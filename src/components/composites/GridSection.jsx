import { Grid } from '@mui/material'
import BaseCard from '../base/BaseCard'

function GridSection({ items }) {
  return (
    <Grid container spacing={2}>
      {items.map((_, i) => (
        <Grid key={i} item xs={12} sm={4} md={3}>
          <BaseCard />
        </Grid>
      ))}
    </Grid>
  )
}
export default GridSection
