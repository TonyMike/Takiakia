import { Grid } from '@mui/material'
import Image from 'next/image'
import { TfiMenuAlt } from 'react-icons/tfi'

const Category = () => {
  const categories = [
    { name: 'Phones & Tablets', icon: 'text' },
    { name: 'Electronics', icon: 'text' },
    { name: 'computer', icon: 'text' },
    { name: 'Electronics', icon: 'text' },
    { name: 'fashion', icon: 'text' },
    { name: 'Sport', icon: 'text' },
    { name: 'Beauty', icon: 'text' },
    { name: 'Home & Appliances', icon: 'text' },
    { name: 'Furnitures', icon: 'text' },
    { name: 'vehichles', icon: 'text' },
    { name: 'Property', icon: 'text' },
    { name: 'Musical Instrument', icon: 'text' }
  ]
  return (
    <div className=' bg-white h-[100%] md:shadow-md '>
      {/* mobile category */}
      <div className=' md:hidden mb-4'>
        <Grid container rowGap={1.2} columnGap={1.2}>
          {categories.map((category, index) => {
            return (
              <Grid
                key={index}
                item
                xs={3.7}
                sm={2.7}
                container
                className='bg-[#F7FAFE] px-2 py-4 sm:px-4 flex flex-col sm:flex-col space-y-2 justify-between items-center'
              >
                <Grid item className='h-[50px] w-[50px] rounded-full relative'>
                  <Image
                    src='/images/iphone13.jpg'
                    layout='fill'
                    alt='icon'
                    className=' rounded-full h-full w-full'
                  />
                </Grid>
                <Grid>
                  <p className='text-[12px] sm:text-[13px] text-navyBlue font-semibold capitalize text-center'>
                    {category.name}
                  </p>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </div>
      {/* desktop categories */}
      <div className='hidden md:block'>
        <h3 className='flex pl-5 pr-20  py-5 md:pl-10 items-center space-x-2'>
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
                className='capitalize pl-5 p-20 pr-1 py-2 md:pl-10 text-[15px] text-[#3d3d3d] hover:bg-pink hover:text-white transition-all ease-in-out duration-200 cursor-pointer hover:ease-in '
              >
                {category.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Category
