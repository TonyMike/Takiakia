import { NextPage } from 'next'
import Head from 'next/head'
import BlogSection from '../Components/BlogSection/BlogSection'
import Category from '../Components/Category/Category'
import Hero from '../Components/Hero/Hero'
import HeaderNav from '../Components/Navigation/HeaderNav/HeaderNav'
import TopNav from '../Components/Navigation/TopNav/TopNav'
import TeamMember from '../Components/TeamMember/Team'

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
      <main className='px-20 flex'>
        <Category />
      </main>
      <BlogSection />
      <TeamMember />
    </>
  )
}

export default Home
