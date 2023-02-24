import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { RiMenu3Fill } from 'react-icons/ri'
import DropDown from '../../../Reusables/DropDown'
import SearchArea from '../../../Reusables/SearchArea'
import { NavLinks } from '../../../utils/staticData'

const HeaderNav = () => {
  const [loggedIn, setLoggedIn] = useState(true)

  const [show, setShow] = useState(false)

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

  const profileLinks = [
    {
      link: 'Dashboard',
      href: '/dashboard'
    },
    {
      link: 'Notifications',
      href: '/dashboard/notifications'
    },
    {
      link: 'Settings',
      href: '/dashboard/settings'
    },
    {
      link: 'Log out',
      href: '/logout'
    }
  ]
  // console.log(hover)
  return (
    <header className=' sticky top-0 bg-lightGreen md:bg-lightGreen shadow-md md:shadow-none z-10'>
      {show ? (
        <div className='h-screen absolute w-full bg-none top-[67px] '></div>
      ) : null}
      {/* mobile header */}
      <nav className='lg:hidden bg-lightGreen flex justify-between items-center py-4 px-4 pr-2 sm:px-10 '>
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
          <Link href={'/dashboard/postAd'} passHref>
            <button
              type='button'
              className='text-[12px] outline-none border-orange border-[1px] rounded-[25px] px-3 py-2 text-orange'
            >
              Sell Now
            </button>
          </Link>
          <button type='button'>
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
      <nav className='hidden lg:flex justify-between items-center px-20 py-3'>
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
          <Link href={'/dashboard/postAd'} passHref>
            <button
              type='button'
              className='orange-btn border-none outline-none ease-in-out shadow-md duration-300 hover:scale-105'
            >
              Sell Now
            </button>
          </Link>
          {loggedIn ? (
            <DropDown
              title={'Profile'}
              icon={<BsPersonFill className='text-deepGreen text-xl' />}
              links={profileLinks}
            />
          ) : (
            <DropDown
              title={'Account'}
              icon={<BsPersonFill className='text-deepGreen text-xl' />}
              links={links}
            />
          )}
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav
