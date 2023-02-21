import { Grid } from '@mui/material'
import Head from 'next/head'
import BlogSection from '../Components/BlogSection/BlogSection'
import Category from '../Components/Category/Category'
import Hero from '../Components/Hero/Hero'
import Layout from '../Components/Layout'
import ProductList from '../Components/ProductList/ProductList'
import UseScrollPosition from '../Hooks/UseScrollPosition'

const Home = ({ data }: { data: any }) => {
  // console.log(data)
  const { scrollPosition } = UseScrollPosition()
  // const [loading, setLoading] = useState(true)
  // const route = useRouter()
  // if (route.isReady == false) {
  //   return <h1>loading</h1>
  // }
  // const CheckData = () => {
  //   if (data == null) {
  //     return <h1>no data</h1>
  //   } else {
  //     return data
  //   }
  // }
  return (
    <>
      <Head>
        <title>Takiakia - Marketplace</title>
      </Head>
      <Layout>
        <Hero />
        <main className='px-5 sm:px-5 bg-white md:px-10 lg:px-20 '>
          <Grid container justifyContent={'space-between'}>
            <Grid item xs={12} lg={2.7}>
              <Category />
            </Grid>
            <Grid item className='' xs={12} lg={9.2}>
              <h3 className='text-[25px] text-center  py-2 text-navyBlue'>
                Lastest Sells
              </h3>
              <ProductList products={data} />
            </Grid>
          </Grid>
        </main>
        <BlogSection />
      </Layout>
      {/* <TeamMember /> */}
    </>
  )
}

export default Home

export async function getStaticProps () {
  const url = process.env.ALL_PRODUCT
  const data = await fetch(
    `https://takiakia-backend.onrender.com/api/products?populate=*`
  )
    .then(response => response.json())
    .then(response => response.data)
    .catch(err => {
      console.log('unable to fetch products')
      return null
    })

  return {
    props: {
      data
    },
    revalidate: 10
  }
}
