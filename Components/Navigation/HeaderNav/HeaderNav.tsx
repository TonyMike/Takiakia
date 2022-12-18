import { RiMenu3Fill } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { useState } from 'react'

const HeaderNav = () => {
  const [show, setShow] = useState(false)
  const links = ['Home', 'About us', 'Blog', 'FAQ']

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
          <button className='text-[12px] font-monteserrat border-pink border-[1px] rounded-[25px] px-3 py-2 text-pink'>
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
                <CgClose onClick={close} fontSize={30} />
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
                <RiMenu3Fill onClick={open} fontSize={30} />
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
              {links.map((list, index) => {
                return (
                  <li
                    key={index}
                    className='hover:bg-deepGreen  text-[14px] sm:text-[16px] hover:text-white cursor-pointer px-7 p-3'
                  >
                    {list}
                  </li>
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
          {links.map(link => {
            return (
              <li className='mx-5 cursor-pointer' key={link}>
                {link}
              </li>
            )
          })}
        </ul>
        <button className='pink-btn ease-in-out duration-300 hover:scale-105'>
          Sell Now
        </button>
      </nav>
    </header>
  )
}

export default HeaderNav
