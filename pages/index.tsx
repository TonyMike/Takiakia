import { Grid } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import BlogSection from '../Components/BlogSection/BlogSection'
import Category from '../Components/Category/Category'
import Hero from '../Components/Hero/Hero'
import Layout from '../Components/Layout'
import Footer from '../Components/Navigation/Footer/Footer'
import HeaderNav from '../Components/Navigation/HeaderNav/HeaderNav'
import TopNav from '../Components/Navigation/TopNav/TopNav'
import ProductList from '../Components/ProductList/ProductList'
import TeamMember from '../Components/TeamMember/Team'

type Props = {}

const Home: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>OjaSchool - Marketplace</title>
      </Head>
      <Layout>
        <Hero />
        <main className='px-5 sm:px-5 md:px-10 lg:px-20 flex flex-col md:flex-row md:space-x-7'>
          <Category />

          <div className=' grow '>
            <ProductList />
          </div>
        </main>
        <BlogSection />
      </Layout>
      {/* <TeamMember /> */}
    </>
  )
}

export default Home
