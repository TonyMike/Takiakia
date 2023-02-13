import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../Components/Layout'
import InputText from '../Reusables/InputText'

const Login: NextPage = () => {
  const handleLogin = (e: any) => {
    e.preventDefault()
  }
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <div className='py-10 md:py-28 flex items-center flex-col justify-center'>
          <h1 className='mb-8 text-3xl md:text-4xl font-semibold'>Welcome back</h1>
          <form className='w-80 flex flex-col space-y-8'>
            <InputText placeholder='Email Address' />
            <InputText placeholder='Password' type='password' />
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-2 cursor-pointer'>
                <input type='checkbox' id='remember' />
                <label
                  htmlFor='remember'
                  className='cursor-pointer text-poppins'
                >
                  Remember me
                </label>
              </div>
              <p className='underline cursor-pointer'>Forgot password?</p>
            </div>
            <button
              type='button'
              className='bg-deepGreen py-2 text-white uppercase'
            >
              Submit
            </button>
          </form>

          <p className='mt-3 flex space-x-2'>
            <span>{`Don't have an account?`}</span>
            <Link href='/register' className='text-orange'>
              Register Now
            </Link>
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Login
