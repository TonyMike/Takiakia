import { NextPage } from 'next'
import Head from 'next/head'
import { createContext } from 'react'
import Layout from '../Components/Layout'
import ProductDetails from '../Components/ProductDetails/ProductDetails'

export const DetailsContext = createContext('')
const ProductInfo: NextPage = ({ data }: any) => {
  return (
    <div>
      <Head>
        <title>Product details</title>
      </Head>
      <DetailsContext.Provider value={data}>
        <Layout>
          <ProductDetails />
        </Layout>
      </DetailsContext.Provider>
    </div>
  )
}

export default ProductInfo

export async function getStaticPaths () {
  const api = process.env.API_URL
  const apiCall = await fetch(`${api}`)

  const res = await apiCall.json()
  const paths = res.map((route: any) => ({
    params: { id: route.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps (context: any) {
  const { params } = context
  const api = process.env.API_URL
  const apiCall = await fetch(`${api}/${params.id}`)
  const data = await apiCall.json()
  return {
    props: {
      data
    }
  }
}
