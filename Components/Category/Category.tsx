import { Box, Grid } from '@mui/material'
import Image from 'next/legacy/image'
import { useRef, useState } from 'react'
import UseScrollPosition from '../../Hooks/UseScrollPosition'

const Category = () => {
  const { scrollPosition } = UseScrollPosition()
  const [activeCategory, setActiveCategory] = useState('')

  const active = true
  const categoryClick = (e: any) => {
    setActiveCategory(e.target.innerText)

    if (activeCategory === e.target.innerText) {
      setActiveCategory('')
      // setActive(false)
    }
    console.log(activeCategory, 'activeCategory')
    console.log(e.target.innerText, 'e.target.innerText')
  }

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

  const categoryRef = useRef(null)
  //@ts-ignore

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
    <div className='  '>
      {/* <div className='fixed left-4 text4xl z-40 top-0'>
        The scroll position is {scrollPosition}
      </div> */}
      {/* mobile category */}
      <div className=' lg:hidden mb-4'>
        <Grid container rowGap={0.7} justifyContent='center' columnGap={0.7}>
          {categories.map((category, index) => {
            return (
              <Grid
                key={index}
                item
                xs={3.7}
                sm={2.7}
                justifyContent='center'
                className='bg-[#F7FAFE] py-3 px-2 cursor-pointer shadow-sm'
              >
                <div className='flex flex-col items-center space-y-2 '>
                  <div className='w-[35px] h-[35px] relative'>
                    <Image src={category.icon} layout='fill' alt='icon' />
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
      <Box className='hidden lg:block'>
        {/* category list */}
        <ul className=''>
          {categories.map(category => {
            return (
              <li
                key={category.name}
                className='w-full text-[15px]'
                ref={categoryRef}
              >
                <span
                  onClick={e => categoryClick(e)}
                  className={` ${
                    active &&
                    activeCategory.toLowerCase() === category.name.toLowerCase()
                      ? ' bg-orange text-white'
                      : ''
                  }  flex space-x-2 capitalize relative  py-2 pl-4  ${
                    !active ? 'text-[#3d3d3d]' : ''
                  }  hover:bg-orange hover:text-white transition-all ease-in duration-150 cursor-pointer hover:ease-in  `}
                >
                  <div className='relative w-[20px] '>
                    <Image src={category.icon} layout='fill' alt='icon' />
                  </div>
                  <span className='text-[13px]'>{category.name} </span>
                </span>

                <ul
                  className={` ${
                    activeCategory.toLowerCase() === category.name.toLowerCase()
                      ? 'block'
                      : 'hidden'
                  }  `}
                >
                  {Array(4)
                    .fill('one')
                    .map(list => {
                      return (
                        <li
                          key={list}
                          className='hover:bg-deepGreen py-1 pl-10 capitalize  hover:text-white transition-all ease-in duration-150 cursor-pointer hover:ease-in '
                        >
                          {list}
                        </li>
                      )
                    })}
                </ul>
              </li>
            )
          })}
        </ul>
      </Box>
    </div>
  )
}

export default Category
