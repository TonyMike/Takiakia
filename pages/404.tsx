import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Components/Layout'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Layout>
        <div className='py-5 pt-0 px-5 flex flex-col justify-center items-center'>
          <motion.div
            initial={{
              y: '0px'
            }}
            animate={{
              y: '20px'
            }}
            transition={{
              yoyo: Infinity,
              duration: 0.7
            }}
            className='h-80 w-80 relative'
          >
            <Image src='/images/404.png' layout='fill' alt='404' />
          </motion.div>
          <p className='text-center text-[14px] mb-10 md:text-[16px]'>
            Unfortunately, we cannot find that page! Everything is still
            awesome, so don't worry
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default NotFound
