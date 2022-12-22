import { RiMenu3Fill } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavLinks } from '../../../utils/staticData'
import Link from 'next/link'

const HeaderNav = () => {
  const [show, setShow] = useState(false)

  const open = () => {
    setShow(prev => (prev = true))
  }
  const close = () => {
    setShow(prev => (prev = false))
  }
  return (
    <header className=' sticky top-0 bg-white md:bg-lightPurple shadow-md md:shadow-none z-10'>
      {show ? (
        <div className='h-screen absolute w-full bg-none top-[67px] '></div>
      ) : null}
      {/* mobile header */}
      <nav className='md:hidden flex justify-between items-center py-4 px-4 pr-2 sm:px-10 '>
        <h2>Logo</h2>
        <div className='flex items-center space-x-3'>
          <button className='text-[12px] outline-none border-pink border-[1px] rounded-[25px] px-3 py-2 text-pink'>
            Sell Now
          </button>
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
        <div className='Poppins text-4xl'>logo</div>
        <ul className='flex'>
          {NavLinks.map((link, index) => {
            return (
              <Link href={link.href} key={index}>
                <li className='mx-5 cursor-pointer'>{link.title}</li>
              </Link>
            )
          })}
        </ul>
        <button className='pink-btn border-none outline-none ease-in-out shadow-md duration-300 hover:scale-105'>
          Sell Now
        </button>
      </nav>
    </header>
  )
}

export default HeaderNav
