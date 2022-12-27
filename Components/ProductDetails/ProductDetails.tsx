import { Grid } from '@mui/material'
import DetailsOne from './DetailsOne'
import ImageDisplay from './ImageDisplay'

const ProductDetails = () => {
  return (
    <div className='p-10'>
      <Grid container>
        <Grid item md={8}>
          <ImageDisplay />
        </Grid>
        <Grid item md={4}>
          <DetailsOne />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDetails
