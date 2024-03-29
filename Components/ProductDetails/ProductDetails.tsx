import { Divider, Grid } from '@mui/material'
import { useContext } from 'react'
import { DetailsContext } from '../../pages/[id]'
import DetailsOne from './DetailsOne'
import ImageDisplay from './ImageDisplay'
import ProductDescription from './ProductDescription'
import SafetyTips from './SafetyTips'

const ProductTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className='text-[22px] capitalize '>{title}</h1>
      {/* <h1 className='text-2xl capitalize '>{title}</h1> */}
    </div>
  )
}
const ProductDetails = () => {
  const data: any = useContext(DetailsContext)
  // console.log(data)
  return (
    <div className='md:p-10'>
      {/* image gallery and user information */}
      <Grid container>
        <Grid item xs={12} md={8}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={12} md={0} className='md:hidden px-3'>
          <ProductTitle title={`${data?.title}`} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DetailsOne />
        </Grid>
      </Grid>

      {/* product description */}
      <Grid container>
        <Grid item xs={12} md={7.6}>
          <div className='px-3 hidden md:block'>
            <ProductTitle title={`${data.title}`} />
          </div>

          <Divider
            className='bg-orange'
            sx={{
              my: 2
            }}
          />

          <ProductDescription />
          <div className='my-3 mb-5 md:hidden'>
            <SafetyTips />
          </div>

          {/* related product list */}
          <div></div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDetails
