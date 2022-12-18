import { Grid } from '@mui/material'
import Image from 'next/image'
import { TfiMenuAlt } from 'react-icons/tfi'

const Category = () => {
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
    <div className=' bg-white h-[100%] md:shadow-md '>
      {/* mobile category */}
      <div className=' md:hidden mb-4'>
        <Grid container rowGap={0.7} columnGap={0.7}>
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
                  <Image
                    src={category.icon}
                    width={40}
                    height={20}
                    // layout='fill'
                    className='mb-2'
                    alt='icon'
                  />

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
      <div className='hidden md:block'>
        <h3 className='flex pr-20  py-5 md:pl-5 lg:pl-6 items-center space-x-2'>
          <span className='mb-1'>
            <TfiMenuAlt />
          </span>
          <span className='text-[20px] '>Categories</span>
        </h3>

        {/* category list */}
        <ul>
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                className='capitalize  p-20 pr-1 py-2 md:pl-5 lg:pl-6 text-[15px] flex space-x-2 text-[#3d3d3d] hover:bg-pink hover:text-white transition-all ease-in-out duration-200 cursor-pointer hover:ease-in '
              >
                <Image src={category.icon} width={20} height={20} alt='icon' />
                <span>{category.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Category
