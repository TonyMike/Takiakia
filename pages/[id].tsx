import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../Components/Layout'
import ProductDetails from '../Components/ProductDetails/ProductDetails'

const ProductInfo: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Product details</title>
      </Head>
      <Layout>
        <ProductDetails />
      </Layout>
    </div>
  )
}

export default ProductInfo
