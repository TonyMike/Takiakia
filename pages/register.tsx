import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../Components/Layout'
import InputText from '../Reusables/InputText'

const Register: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Create an account to get started</title>
      </Head>
      <Layout>
        <div className='py-10 md:py-28 flex items-center flex-col justify-center'>
          <h1 className='mb-10 text-3xl md:text-4xl font-semibold'>
            Create an Account
          </h1>
          <form className='w-[350px] flex flex-col space-y-6'>
            {/*full name  */}
            <div className='flex space-x-2'>
              <InputText placeholder='First Name' />
              <InputText placeholder='Last Name' />
            </div>

            <InputText placeholder='Email Address' type='email' />

            <InputText placeholder='Password' type='password' />
            <InputText placeholder='Confirm Password' type='password' />

            <button
              type='button'
              className='bg-deepGreen py-2 text-white uppercase'
            >
              Submit
            </button>
          </form>

          <p className='mt-3 flex space-x-2'>
            <span> Already have an account?</span>
            <Link href='/login' className='text-orange'>
              Sign in
            </Link>
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Register
