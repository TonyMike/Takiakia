import Image from 'next/image'

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
      <div className='w-full h-[120px] sm:h-32 md:h-40'>
        <Image
          src='/images/iphone13.jpg'
          height={100}
          width={100}
          alt='product'
          className='h-full w-full'
        />
      </div>
      <h6 className='text-[16px] my-2'>Iphone 13 pro max</h6>
      <p className='font-Josefin text-navyBlue'>N 560,000</p>
      <p className='text-[rgba(0,0,0,0.7)] text-[13px] my-1'>
        Location: FPE, Osun
      </p>
    </div>
  )
}

export default ProductCard
