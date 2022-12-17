import { Grid } from '@mui/material'
import ProductCard from '../Cards/ProductCard'

const ProductList = () => {
  return (
    <div className=''>
      <h3 className='text-[25px] text-center  py-2 text-navyBlue'>
        Lastest Sells
      </h3>
      <div>
        <Grid
          container
          direction='row'
          rowGap={2}
          justifyContent='space-between'
        >
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'new'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'used'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'new'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'new'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'used'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'new'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'new'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'used'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'new'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'new'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'used'} />
          </Grid>
          <Grid item xs={5.7} sm={5.7} md={3.9}>
            <ProductCard productCondition={'new'} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ProductList