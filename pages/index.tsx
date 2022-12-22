import { NextPage } from 'next'
import Head from 'next/head'
import BlogSection from '../Components/BlogSection/BlogSection'
import Category from '../Components/Category/Category'
import Hero from '../Components/Hero/Hero'
import Layout from '../Components/Layout'
import ProductList from '../Components/ProductList/ProductList'

const Home = ({ data }: { data: any }) => {
  return (
    <>
      <Head>
        <title>Takiakia - Marketplace</title>
      </Head>
      <Layout>
        <Hero />
        <main className='px-5 sm:px-5 md:px-10 lg:px-20 flex flex-col md:flex-row md:space-x-7'>
          <Category />

          <div className=' grow '>
            <ProductList products={data} />
          </div>
        </main>
        <BlogSection />
      </Layout>
      {/* <TeamMember /> */}
    </>
  )
}

export default Home

export async function getStaticProps () {
  const callApi = await fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => data)
  const data = await callApi
  return {
    props: {
      data
    }
  }
}
