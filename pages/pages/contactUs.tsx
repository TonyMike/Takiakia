import { NextPage } from 'next'
import Head from 'next/head'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Layout from '../../Components/Layout'

const contactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout>
        <ContactUs />
      </Layout>
    </>
  )
}

export default contactUs
