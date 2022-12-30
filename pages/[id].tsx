import { NextPage } from 'next'
import Head from 'next/head'
import { createContext } from 'react'
import Layout from '../Components/Layout'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import axios from 'axios'

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
  const apiCall = await axios.get(`${api}`)
  console.log('this is the api', { apiCall })

  const path = apiCall.data.map((route: any) => ({
    params: { id: route.id.toString() }
  }))
  const paths = Array(200)
    .fill(1)
    .map((x, i) => {
      return {
        params: { id: String(i) }
      }
    })
  return {
    paths,
    // paths: [
    //   {
    //     params: { id: '1' }
    //   }
    // ],
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
