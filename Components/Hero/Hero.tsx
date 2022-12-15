import { BsSearch, BsChevronDown } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

const Hero = () => {
  return (
    <div
      className={` bg-lightPurple h-[480px] bg-contain bg-no-repeat bg-right bg-[url('/images/heroImage.png')] px-20 py-[60px]`}
    >
      <h3 className='text-2xl text-pink'>Best place to sell it!</h3>
      <h2 className='text-4xl w-[500px] mt-3 font-Montserrat text-[#0D0E43]'>
        Buying or selling as a student has never been easier
      </h2>
      <button className='bg-deepGreen shadow-[13px_18px_13px_rgba(130,178,182,0.41)] px-[60px] hover:shadow-[3px_5px_10px_rgba(130,178,182,0.41)] hover:ease-in transition duration-150 ease-out py-3 rounded-lg text-white text-xl mt-5 '>
        Sell it
      </button>

      <div className='mt-[50px] w-[100%] px-10 flex items-center justify-center  space-x-6'>
        {/* search button */}
        <div className='max-w-[500px] bg-white h-[45px] px-5 rounded-md border-[1px] border-pink flex justify-between items-center  '>
          <input
            type='text'
            placeholder='Looking for something...'
            className='w-[500px] h-[100%] border-none outline-none font-Montserrat'
          />
          <BsSearch fontSize={20} color={'grey'} className='cursor-pointer' />
        </div>

        {/* location button */}
        <div>
          <button className='flex items-center  rounded-md h-[45px] bg-[rgba(255,255,255,0.92)] px-6 py-2 '>
            <span className='mr-1 text-[12px] mb-1 '>
              <GoLocation color='grey' />
            </span>
            <span className='text-navyBlue'>Abuja</span>

            <span>
              <BsChevronDown className='text-pink ml-5 text-[12px] font-bold' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
