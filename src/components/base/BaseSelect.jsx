import { FormControl, MenuItem, Select, styled } from '@mui/material'
import { useState } from 'react'

const SelectWrapper = styled(Select)(() => ({
  borderRadius: 0,

  '.MuiSelect-select': {
    paddingTop: '4px',
    paddingBottom: '4px',
  },

  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },

  '.MuiSvgIcon-root': {
    color: '#1976d2',
    fontSize: '2rem',
    right: 0,
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
    borderWidth: '1px',
  },
}))

function BaseSelect() {
  const [filter, setFilter] = useState('')

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <FormControl sx={{ width: '100%' }} size="small">
      <SelectWrapper value={filter} onChange={handleChange} displayEmpty>
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
      </SelectWrapper>
    </FormControl>
  )
}
export default BaseSelect
