import Image from 'next/image'
import { GoLocation } from 'react-icons/go'
import Skeleton from 'react-loading-skeleton'
import { NairaIcon } from '../../utils/staticData'

const ProductCard = ({ data }: { data: any }) => {
  const { attributes } = data
  const price = parseInt(attributes.price.replaceAll(',', '')).toLocaleString()
  return (
    <div className='shadow-md relative px-2 py-3 cursor-pointer'>
      <p
        className={`absolute right-[8px] ${
          attributes.condition === 'new' ? 'bg-orange' : 'bg-deepGreen'
        } text-white px-3 py-1 text-[11px] capitalize z-[2] `}
      >
        {attributes.condition}
      </p>
      <div className='w-full h-[120px] sm:h-32 md:h-40  relative lg:h-[165px]'>
        <span className='z-[2] absolute bottom-0 bg-[rgba(0,0,0,0.3)] text-white text-xs py-1 p-2'>
          {attributes.images.data.length}
        </span>
        <Image
          src={`${attributes.images.data[0].attributes.url}`}
          objectFit='cover'
          fill
          alt={attributes.title}
        />
      </div>
      <h6 className='text-sm sm:text-[16px] my-1 md:my-2 w-full whitespace-nowrap overflow-hidden text-ellipsis'>
        {attributes.title}
      </h6>
      <p className='font-Poppins flex text-[15px] sm:text-[16px] items-center space-x-1 text-navyBlue'>
        <NairaIcon />
        <span> {price}</span>
      </p>
      <p className='text-[rgba(0,0,0,0.7)] text-[12px] mt-1 md:text-[13px] flex items-center space-x-1   md:my-1'>
        <GoLocation fontSize={15} />

        <span>FPE, Osun</span>
      </p>
    </div>
  )
}

export default ProductCard
