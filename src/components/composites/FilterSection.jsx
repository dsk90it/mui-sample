import { Grid } from '@mui/material'
import BaseSelect from '../base/BaseSelect'
import BaseSearch from '../base/BaseSearch'

function FilterSection() {
  return (
    <Grid
      component={'section'}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ my: 2, gap: 2 }}
    >
      <Grid item xs={12} sm={3} lg={2}>
        <BaseSelect />
      </Grid>
      <Grid item xs={12} sm={3} lg={2}>
        <BaseSearch placeholder={'Search'} />
      </Grid>
    </Grid>
  )
}

export default FilterSection
