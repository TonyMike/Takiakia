import { Grid } from '@mui/material'
import DetailsOne from './DetailsOne'
import ImageDisplay from './ImageDisplay'

const ProductDetails = () => {
  return (
    <div className='m:p-10'>
      <Grid container>
        <Grid item xs={12} md={8} bgcolor='red' className=''>
          <ImageDisplay />
        </Grid>
        <Grid item xs={12} md={0} className='md:hidden' bgcolor='yellow'>
          <h1>some product name</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <DetailsOne />
        </Grid>
      </Grid>
      <h1>some product name</h1>
    </div>
  )
}

export default ProductDetails
