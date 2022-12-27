import { Grid } from '@mui/material'

const ImageDisplay = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={2.5} bgcolor='red'>
          image list
        </Grid>
        <Grid item md={9.5} bgcolor='blue'>
          right
        </Grid>
      </Grid>
    </div>
  )
}

export default ImageDisplay
