import { NextPage } from 'next'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import BlogSection from '../Components/BlogSection/BlogSection'
import Category from '../Components/Category/Category'
import Hero from '../Components/Hero/Hero'
import Layout from '../Components/Layout'
import ProductList from '../Components/ProductList/ProductList'
import UseScrollPosition from '../Hooks/UseScrollPosition'

const Home = ({ data }: { data: any }) => {
  const { scrollPosition } = UseScrollPosition()
  // const route = useRouter()
  // if (route.isReady == false) {
  //   return <h1>loading</h1>
  // }
  // console.log(data)

  return (
    <>
      <Head>
        <title>Takiakia - Marketplace</title>
      </Head>
      <Layout>
        <Hero />
        <main className='px-5 sm:px-5 md:px-10 lg:px-20 flex flex-col md:flex-row md:space-x-7'>
          <div
          // className={`${
          //   scrollPosition >= 535 ? 'sticky top-[70px]' : 'relative'
          // }`}
          >
            <Category />
          </div>

          <div className={` grow`}>
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
  const url = process.env.API_URL
  const callApi = await fetch(`${url}`)
    .then(response => response.json())
    .then(data => data)
    .catch(err => {
      return JSON.stringify(err)
    })
  const data = await callApi
  return {
    props: {
      data
    }
  }
}
