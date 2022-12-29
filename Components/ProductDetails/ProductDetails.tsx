import { Divider, Grid } from '@mui/material'
import DetailsOne from './DetailsOne'
import ImageDisplay from './ImageDisplay'
import ProductDescription from './ProductDescription'

const ProductTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className='text-[22px] capitalize '>{title}</h1>
      {/* <h1 className='text-2xl capitalize '>{title}</h1> */}
    </div>
  )
}
const ProductDetails = () => {
  return (
    <div className='md:p-10'>
      <Grid container>
        <Grid item xs={12} md={8}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={12} md={0} className='md:hidden px-3'>
          <ProductTitle title='Iphone 13 Pro Max' />
        </Grid>
        <Grid item xs={12} md={4}>
          <DetailsOne />
        </Grid>
      </Grid>
      <div className='px-3 hidden md:block'>
        <ProductTitle title='Iphone 13 Pro Max' />
      </div>

      <Divider
        className='bg-pink'
        sx={{
          my: 2
        }}
      />
      <ProductDescription />
    </div>
  )
}

export default ProductDetails
