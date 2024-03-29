import { Grid } from '@mui/material'
import Link from 'next/link'
import ProductCard from '../Cards/ProductCard'

const ProductList = ({ products }: any) => {
  return (
    <div>
      <Grid container direction='row' rowGap={2} justifyContent='space-between'>
        {products ? (
          products.slice(0, 12).map((product: any, index: number) => {
            return (
              <Grid key={index} item xs={5.7} sm={5.7} md={3.9}>
                <Link href={`${product.id}`} passHref>
                  <ProductCard data={product} />
                </Link>
              </Grid>
            )
          })
        ) : (
          <h1>Unable to fetch products please try again</h1>
        )}
      </Grid>
    </div>
  )
}

export default ProductList
function useEffect (arg0: () => void) {
  throw new Error('Function not implemented.')
}
