import Image from 'next/image'
import { GoLocation } from 'react-icons/go'
import { NairaIcon } from '../../utils/staticData'

const FilterProductCard = () => {
  return (
    <div className='bg-white p-3 shadow-sm flex space-x-3 text-[14px] h-[130px]'>
      <div className='min-w-[150px]  rounded-sm  relative'>
        <Image
          src='/images/iphone13.jpg'
          alt='product image'
          layout='fill'
          className='text-xs rounded-sm '
        />
      </div>
      <div>
        <p className='text-navyBlue font-thin'>Iphone 13 Pro max</p>
        <p className='flex text-[14px] items-center space-x-[2px] text-pink'>
          <NairaIcon fontSize='16px' />
          <span>30,000</span>
        </p>
        <p className='text-grey text-[11px] h-[33px] overflow-hidden '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <p className='text-[11px] flex items-center space-x-1 mt-3 text-[#000000b3]'>
          <GoLocation fontSize={12} />
          <span>YabaTech, Lagos</span>
        </p>
      </div>
    </div>
  )
}

export default FilterProductCard
