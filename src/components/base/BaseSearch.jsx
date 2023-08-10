import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.common.black}`,

  '&.is-dark': {
    backgroundColor: alpha(theme.palette.common.black, 0.5),

    '.MuiInputBase-input': {
      color: theme.palette.common.white,
      fontStyle: 'normal',
      padding: theme.spacing(1, 4, 1, 1),
    },
  },
}))

const SearchIconWrapper = styled('div')(() => ({
  top: 0,
  right: '0.25rem',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',

  '& .MuiInputBase-input': {
    width: '100%',
    padding: theme.spacing(0.5, 4, 0.5, 1),
    fontStyle: 'italic',
  },
}))

function BaseSearch({ placeholder, isDark, handleChange }) {
  return (
    <SearchWrapper className={isDark && `is-dark`}>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => handleChange(e)}
      />
      <SearchIconWrapper>
        <SearchIcon color={!isDark ? 'primary' : 'inherit'} />
      </SearchIconWrapper>
    </SearchWrapper>
  )
}

export default BaseSearch
