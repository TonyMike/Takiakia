import Image from "next/image";
import { GoLocation } from 'react-icons/go'
import Skeleton from 'react-loading-skeleton'

const ProductCard = ({
  productCondition,
  data
}: {
  productCondition: string
  data: any
}) => {
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
          src={`${data.category.image}`}
          height={100}
          width={100}
          alt='product'
          className='h-full w-full'
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <h6 className='text-[16px] my-1 md:my-2'>{data.title}</h6>
      <p className='font-Poppins text-navyBlue'>N {data.price}</p>
      <p className='text-[rgba(0,0,0,0.7)] text-[12px] mt-1 md:text-[13px] flex items-center space-x-1   md:my-1'>
        <GoLocation fontSize={15} />

        <span>FPE, Osun</span>
      </p>
    </div>
  );
}

export default ProductCard
