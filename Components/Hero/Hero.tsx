import Image from 'next/image'
import Link from 'next/link'
import SearchArea from '../../Reusables/SearchArea'

const Hero = () => {
  return (
    <div
      className={`bg-lightGreen  h-[250px] sm:h-[320px] relative  lg:h-[420px] bg-cover md:bg-contain bg-no-repeat
      bg-[url('/images/heroImage.png')]
       bg-right
      px-5 md:px-20 py-10 md:py-[60px] mb-10 `}
    >
      {/* <Image
        src='/images/heroImage.png'
        alt='hero bg image'
        fill={true}
        objectFit='contain '
      /> */}
      {/* hero message */}
      <div className='hidden z-10 lg:block'>
        <h3 className='text-2xl text-orange'>Best place to sell it!</h3>
        <h2 className='text-4xl w-[500px] mt-3 font-Poppins text-[#0D0E43]'>
          Buying and selling as a student has never been easier
        </h2>
        <Link href={'/postAd'} className='z-10`' passHref>
          <button className=' bg-deepGreen border-none cursor-pointer outline-none shadow-[13px_18px_13px_rgba(130,178,182,0.41)] px-[60px] hover:shadow-[3px_5px_10px_rgba(130,178,182,0.41)] hover:ease-in transition duration-150 ease-out py-3 rounded-lg text-white text-xl mt-5 '>
            Start Selling
          </button>
        </Link>
      </div>

      <div className='lg:hidden z-30 flex flex-col items-center space-y-5'>
        <h2 className='text-xl  mt-3 font-Poppins text-center text-[deepGreen]'>
          {/* Student shopping made easy */}
        </h2>

        <div className='w-[300px]  z-[2] md:relative md:right-0'>
          <SearchArea />
        </div>
      </div>
    </div>
  )
}

export default Hero
