import { RiMenu3Fill } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { NavLinks } from '../../../utils/staticData'
import Link from 'next/link'
import Image from 'next/image'
import SearchArea from '../../../Reusables/SearchArea'
import { BsPersonFill } from 'react-icons/bs'
import DropDown from '../../../Reusables/DropDown'
// import { IoPersonOutline } from 'react-icons/io'

const HeaderNav = () => {
  const [show, setShow] = useState(false)
  const [hover, setHover] = useState(false)

  const open = () => {
    setShow(prev => (prev = true))
  }
  const close = () => {
    setShow(prev => (prev = false))
  }
  const links = [
    {
      link: 'Login',
      href: '/login'
    },
    {
      link: 'Register',
      href: '/register'
    }
  ]
  // console.log(hover)
  return (
    <header className=' sticky top-0 bg-white md:bg-lightGreen shadow-md md:shadow-none z-10'>
      {show ? (
        <div className='h-screen absolute w-full bg-none top-[67px] '></div>
      ) : null}
      {/* mobile header */}
      <nav className='md:hidden flex justify-between items-center py-4 px-4 pr-2 sm:px-10 '>
        <Link href={'/'} passHref>
          <div className='relative h-[40px] w-[120px] z-30 '>
            <Image
              src='/icons/TAKIAKIALOGO.svg'
              alt='takiakia logo'
              layout='fill'
            />
          </div>
        </Link>

        <div className='flex items-center space-x-3'>
          <Link href={'/postAd'} passHref>
            <button className='text-[12px] outline-none border-orange border-[1px] rounded-[25px] px-3 py-2 text-orange'>
              Sell Now
            </button>
          </Link>
          <button>
            {show ? (
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut'
                }}
              >
                <CgClose
                  onClick={close}
                  className='border-none outline-none'
                  fontSize={30}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut'
                }}
              >
                <RiMenu3Fill
                  className='border-none outline-none'
                  onClick={open}
                  fontSize={30}
                />
              </motion.div>
            )}
          </button>
        </div>

        {show ? (
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut'
            }}
            className='absolute  right-0 bg-white h-screen top-[67px] shadow-md  w-1/2 md:w-2/5  '
          >
            <ul>
              {NavLinks.map((list, index) => {
                return (
                  <Link href={list.href} key={index}>
                    <li className='hover:bg-deepGreen  text-[14px] sm:text-[16px] hover:text-white cursor-pointer px-7 p-3'>
                      {list.title}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </motion.div>
        ) : null}
      </nav>

      {/* desktop header */}
      <nav className='hidden md:flex justify-between items-center px-20 py-3'>
        <Link href={'/'} passHref>
          <div className='relative h-[40px] w-[150px] z-30 '>
            <Image
              src='/icons/TAKIAKIALOGO.svg'
              alt='takiakia logo'
              layout='fill'
            />
          </div>
        </Link>

        <div className='w-[420px]'>
          <SearchArea />
        </div>

        <div className='flex  items-center space-x-3'>
          <Link href={'/postAd'} passHref>
            <button className='orange-btn border-none outline-none ease-in-out shadow-md duration-300 hover:scale-105'>
              Sell Now
            </button>
          </Link>
          <DropDown
            title={'Account'}
            icon={<BsPersonFill className='text-deepGreen text-xl' />}
            links={links}
          />
          {/* <div
            className=' cursor-pointer relative w-40 '
            onMouseEnter={() => setHover(true)}
            // onMouseLeave={() => setHover(false)}
          >
            <div className='flex rounded-lg items-center space-x-2'>
              <BsPersonFill className='text-deepGreen text-xl' />
              <p className='text-sm '>Account</p>
            </div>
            {hover && (
              <ul className='bg-white shadow-lg text-sm  absolute bottom-[-70px] w-full'>
                {list.map(x => {
                  return (
                    <Link href='#' passHref>
                      <li className='hover:bg-deepGreen px-3 py-[6px]'>{x}</li>
                    </Link>
                  )
                })}
              </ul>
            )}
          </div> */}
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav
