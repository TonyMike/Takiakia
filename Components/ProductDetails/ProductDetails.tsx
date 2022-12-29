import { Divider, Grid } from '@mui/material'
import DetailsOne from './DetailsOne'
import ImageDisplay from './ImageDisplay'
import ProductDescription from './ProductDescription'

const ProductDetails = () => {
  return (
    <div className='m:p-10'>
      <Grid container>
        <Grid item xs={12} md={8} bgcolor='red' className=''>
          <ImageDisplay />
        </Grid>
        <Grid item xs={12} md={0} className='md:hidden'>
          <h1 className='text-2xl capitalize'>Iphone 13 Pro Max</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <DetailsOne />
        </Grid>
      </Grid>
      <h1 className='hidden md:block'>Iphone 13 Pro Max</h1>
      <Divider
        className='bg-pink'
        sx={{
          my: 3
        }}
      />
      <ProductDescription />
    </div>
  )
}

export default ProductDetails
