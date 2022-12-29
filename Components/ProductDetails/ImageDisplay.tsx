import { Grid } from '@mui/material'

const ImageDisplay = () => {
  return (
    <Grid
      container
      className='h-[400px]'
      direction={{
        xs: 'column-reverse',
        md: 'row'
      }}
    >
      <Grid
        item
        xs={3}
        md={2.3}
        className='overflow-y-scroll  no-scrollbar'
        container
      >
        <Grid item xs={3} md={12}></Grid>
        <Grid item xs={3} md={12}>
          two
        </Grid>
        <Grid item xs={3} md={12}>
          three
        </Grid>
        <Grid item xs={3} md={12}>
          four
        </Grid>
      </Grid>
      <Grid item xs={9} md={9.7}>
        image preview
      </Grid>
    </Grid>
  )
}

export default ImageDisplay
