import { NextPage } from 'next'
import Head from 'next/head'
import ProductCard from '../Components/Cards/ProductCard'
import Hero from '../Components/Hero/Hero'
import HeaderNav from '../Components/Navigation/HeaderNav/HeaderNav'
import TopNav from '../Components/Navigation/TopNav/TopNav'

type Props = {}

const Home: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>OjaSchool - Marketplace</title>
      </Head>
      <TopNav />
      <HeaderNav />
      <Hero />
      {/* <ProductCard /> */}
    </>
  )
}

export default Home
