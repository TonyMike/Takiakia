import Image from 'next/image'
import Link from 'next/link'
import { BsSearch, BsChevronDown } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import SearchArea from '../../Reusables/SearchArea'

const Hero = () => {
  return (
    <div
      className={` md:bg-lightGreen h-[250px] sm:h-[320px] relative md:h-[420px] bg-cover md:bg-contain bg-no-repeat bg-right  md:bg-[url('/images/heroImage.png')] px-5 md:px-20 py-10 md:py-[60px] mb-10 `}
    >
      <Image
        src='/images/heroImage2.png'
        alt='hero background image'
        layout='fill'
        className='md:hidden  z-[-20] '
        sizes='100vw'
      />
      {/* hero message */}
      <div className='hidden md:block'>
        <h3 className='text-2xl text-orange'>Best place to sell it!</h3>
        <h2 className='text-4xl w-[500px] mt-3 font-Poppins text-[#0D0E43]'>
          Buying and selling as a student has never been easier
        </h2>
        <Link href={'/postAd'} passHref>
          <button className='bg-deepGreen border-none outline-none shadow-[13px_18px_13px_rgba(130,178,182,0.41)] px-[60px] hover:shadow-[3px_5px_10px_rgba(130,178,182,0.41)] hover:ease-in transition duration-150 ease-out py-3 rounded-lg text-white text-xl mt-5 '>
            Start Selling
          </button>
        </Link>
      </div>

      <div className='md:hidden z-30 flex flex-col items-center space-y-5'>
        <h2 className='text-xl  mt-3 font-Poppins text-center text-[deepGreen]'>
          Student shopping made easy
        </h2>

        <div className='w-[300px]'>
          <SearchArea />
        </div>
      </div>
    </div>
  )
}

export default Hero
