import Head from 'next/head'
import Image from "next/legacy/image";
import Layout from '../Components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
          <p className='text-center text-[14px] md:text-[16px]'>
            Hey there! You seem lost. I could help you back home
          </p>
          <Link href='/' passHref>
            <button className='outline-none border-none text-xs bg-deepGreen rounded-lg p-3 px-4 my-5 shadow-md text-white'>
              Take me home
            </button>
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default NotFound
