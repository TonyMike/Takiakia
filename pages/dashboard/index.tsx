import Head from 'next/head'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Layout from '../../Components/Layout'

const DashboardPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard - Tony Michael</title>
      </Head>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  )
}

export default DashboardPage
