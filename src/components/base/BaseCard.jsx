import { Paper, Skeleton, Stack } from '@mui/material'

function BaseCard() {
  return (
    <Paper elevation={3} square sx={{ p: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Skeleton variant="circular" width={40} height={40} animation={false} />
        <Skeleton
          variant="rectangular"
          sx={{ fontSize: '1rem', flex: 1 }}
          animation={false}
        />
      </Stack>

      <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={12}
          animation={false}
        />
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={12}
          animation={false}
        />
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={12}
          animation={false}
        />
        <Skeleton
          variant="rectangular"
          width={'80%'}
          height={12}
          animation={false}
        />
      </Stack>
    </Paper>
  )
}
export default BaseCard
