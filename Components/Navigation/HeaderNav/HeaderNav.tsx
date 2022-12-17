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
      {/* mobile header */}
      <nav className='md:hidden flex justify-between items-center py-4 px-4 pr-2 sm:px-10 '>
        <h2>Logo</h2>
        <div className='flex items-center space-x-3'>
          <button className='text-[12px] font-monteserrat border-pink border-[1px] rounded-[25px] px-3 py-2 text-pink'>
            Sell Now
          </button>
          <button>
            {show ? (
              <CgClose onClick={close} fontSize={30} />
            ) : (
              <RiMenu3Fill onClick={open} fontSize={30} />
            )}
          </button>
        </div>

        {show ? (
          <motion.div
            initial={{
              transform: 'translateX(100%)'
            }}
            animate={{
              transform: 'translateX(0%)'
            }}
            className='h-screen flex justify-end w-full absolute right-0 top-0 pt-[67px] z-[-10] transition-all duration-75'
          >
            <div className='bg-white w-1/2 sm:w-2/5 relative '>
              <ul>
                {links.map((list, index) => {
                  return (
                    <li
                      key={index}
                      className='hover:bg-deepGreen text-[14px] sm:text-[16px] hover:text-white cursor-pointer px-7 p-3'
                    >
                      {list}
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </nav>
      {/* desktop header */}
      <nav className='hidden md:flex justify-between items-center px-20 py-3'>
        <div className='Josefin text-4xl'>logo</div>
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
