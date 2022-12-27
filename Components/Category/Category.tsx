import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { TfiMenuAlt } from 'react-icons/tfi'
import UseScrollPosition from '../../Hooks/UseScrollPosition'

const Category = () => {
  const { scrollPosition } = UseScrollPosition()
  // const [scrollPosition, setScrollPosition] = useState(0)

  // useEffect(() => {
  //   function handleScroll () {
  //     setScrollPosition(window.pageYOffset)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  // const divStyle = {
  //   position: scrollPosition > 200 ? 'fixed' : 'relative',
  //   top: scrollPosition > 200 ? '0' : ''
  // }

  const divRef = useRef(null)
  const div = divRef.current

  const categories = [
    { name: 'Phones & Tablets', icon: '/icons/smartphone.png' },
    { name: 'Electronics', icon: '/icons/electronics.png' },
    { name: 'computer', icon: '/icons/computer.png' },
    { name: 'fashion', icon: '/icons/fashion.png' },
    { name: 'Sport', icon: '/icons/sport.png' },
    { name: 'Game', icon: '/icons/game.png' },
    { name: 'Beauty', icon: '/icons/beauty.png' },
    { name: 'Home & Appliances', icon: '/icons/home-appliance.png' },
    { name: 'Furnitures', icon: '/icons/furnitures.png' },
    { name: 'vehichles', icon: '/icons/vehicles.png' },
    { name: 'Property', icon: '/icons/house.png' },
    { name: 'Musical Instrument', icon: '/icons/musical-instrument.png' }
  ]

  return (
    <div className=' md:shadow-md '>
      {/* <div className='fixed left-4 text4xl z-40 top-0'>
        The scroll position is {scrollPosition}
      </div> */}
      {/* mobile category */}
      <div className=' md:hidden mb-4'>
        <Grid container rowGap={0.7} justifyContent='center' columnGap={0.7}>
          {categories.map((category, index) => {
            return (
              <Grid
                key={index}
                item
                xs={3.7}
                sm={2.7}
                // container
                // direction='column'
                justifyContent='center'
                // alignItems='center'
                className='bg-[#F7FAFE] py-3 px-2'
              >
                <div className='flex flex-col items-center space-y-2 '>
                  <div className='w-[35px] h-[35px] relative'>
                    <Image
                      src={category.icon}
                      layout='fill'
                      // className='mb-2 '
                      alt='icon'
                    />
                  </div>

                  <p className='text-[12px] sm:text-[13px]  text-navyBlue font-semibold text-center capitalize'>
                    {category.name}
                  </p>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>

      {/* desktop categories */}
      <Box className='hidden md:block'>
        {/* <h3 className='flex pr-20  py-5 md:pl-5 lg:pl-6 items-center space-x-2'>
          <span className='mb-1'>
            <TfiMenuAlt />
          </span>
          <span className='text-[20px] '>Categories</span>
        </h3> */}
        {/* <ul className='absolute w-[400px] z-20 bg-red shadow-sm top-0 left-[235px] h-full'>
          <li>cars</li>
          <li>cars</li>
          <li>cars</li>
          <li>cars</li>
          <li>cars</li>
          <li>cars</li>
          <li>cars</li>
        </ul> */}

        {/* category list */}
        <ul className='' ref={divRef}>
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                className='capitalize w-[200px] md:w-[234px] py-2 md:pl-5 lg:pl-6 text-[15px] flex space-x-2 text-[#3d3d3d] hover:bg-pink hover:text-white transition-all ease-in-out duration-200 cursor-pointer hover:ease-in '
              >
                <Image
                  src={category.icon}
                  width={20}
                  height={20}
                  alt='icon'
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
                <span className='text-[13px]'>{category.name}</span>
              </li>
            )
          })}
        </ul>
      </Box>
    </div>
  )
}

export default Category
