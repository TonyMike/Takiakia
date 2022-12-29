import Image from 'next/image'
import { GoLocation } from 'react-icons/go'
import { NairaIcon } from '../../utils/staticData'

const FilterProductCard = () => {
  return (
    <div className='bg-white p-3 shadow-sm flex space-x-3 text-[14px] h-[130px] sm:h-[170px] md:h-[220px] lg:h-[250px] '>
      <div className='min-w-[150px] ms:min-w-[170px]  sm:min-w-[250px] lg:min-w-[350px] rounded-sm  relative'>
        <Image
          src='/images/iphone13.jpg'
          alt='product image'
          className='text-xs rounded-sm '
          fill
          sizes='100vw'
        />
      </div>
      <div className='h-full flex flex-col'>
        <p className='text-navyBlue text-[16px] ms:text-[17px] sm:text-lg font-thin lg:text-2xl'>
          Iphone 13 Pro max
        </p>
        <p className='flex text-[14px] sm:text-lg items-center space-x-[2px]  lg:my-2 lg:text-[20px] text-pink'>
          <NairaIcon />
          <span>30,000</span>
        </p>
        <p className='text-grey text-[11px] h-[33px] sm:h-auto sm:text-[14px] sm:my-2 md:my-3 lg:text-[16px] overflow-hidden  '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <p className='text-[11px]  flex items-center space-x-1 mt-3 md:mt-4  sm:text-[13px] lg:text-[15px] text-[#000000b3]'>
          <GoLocation fontSize={12} className='text-[12px] md:text-[14px]' />
          <span>YabaTech, Lagos</span>
        </p>
      </div>
    </div>
  )
}

export default FilterProductCard
