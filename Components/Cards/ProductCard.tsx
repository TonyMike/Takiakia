import Image from 'next/image'
import { GoLocation } from 'react-icons/go'
const ProductCard = ({ productCondition }: { productCondition: string }) => {
  return (
    <div className='shadow-md relative px-2 py-3 cursor-pointer'>
      <p
        className={`absolute right-[8px] ${
          productCondition === 'new' ? 'bg-pink' : 'bg-deepGreen'
        } text-white px-3 py-1 text-[11px] capitalize `}
      >
        {productCondition}
      </p>
      <div className='w-full h-[120px] sm:h-32 md:h-40 lg:h-[165px]'>
        <Image
          src='/images/iphone13.jpg'
          height={100}
          width={100}
          alt='product'
          className='h-full w-full'
        />
      </div>
      <h6 className='text-[16px] my-1 md:my-2'>Iphone 13 pro max</h6>
      <p className='font-Poppins text-navyBlue'>N 560,000</p>
      <p className='text-[rgba(0,0,0,0.7)] text-[12px] mt-1 md:text-[13px] flex items-center space-x-1   md:my-1'>
        <GoLocation fontSize={15} />

        <span>FPE, Osun</span>
      </p>
    </div>
  )
}

export default ProductCard
