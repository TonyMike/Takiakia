import Image from "next/legacy/image";
import { BiCalendar } from 'react-icons/bi'

const BlogPost = () => {
  return (
    <div className='overflow-hidden rounded-lg shadow-md cursor-pointer mt  h-90 '>
      <div className='block w-full h-full'>
        <Image
          alt='blog photo'
          height={100}
          width={100}
          src='/images/postImg.jpg'
          className='object-cover w-full max-h-44 md:max-h-40'
        />
        <div className='w-full p-4'>
          <p className='font-Poppins text-[14px] mb-2 md:mb-5 flex items-center space-x-2'>
            <span>
              <BiCalendar color='#FFA454' />
            </span>
            <span className='text-[12px] sm:text-[14px] lg:text-[15px]'>
              13 December,2022
            </span>
          </p>
          <p className='mb-1 md:mb-2 md:text-[18px] font-semibold text-offBlue'>
            Top esssential Trends in 2022
          </p>
          <p className='font-light text-[#72718F] text-[13px]  md:text-[16px]'>
            The new supercar is here, 543 cv and 140 000$. This is best racing
            GT about 7 years on...
          </p>
          <p className='underline mt-4 text-[14px] sm:text-[15px] md:text-[16px]'>
            Read More
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
