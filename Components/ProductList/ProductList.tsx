import { Grid } from '@mui/material'
import ProductCard from '../Cards/ProductCard'

const ProductList = ({ products }: any) => {
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
          {products.slice(0, 12).map((product: any, index: number) => {
            return (
              <Grid key={index} item xs={5.7} sm={5.7} md={3.9}>
                <ProductCard
                  data={product}
                  productCondition={product.id % 2 === 0 ? 'new' : 'old'}
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default ProductList
