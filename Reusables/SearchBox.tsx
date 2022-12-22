import { BsChevronDown, BsSearch } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

const SearchBox = () => {
  return (
    <div className=' w-[100%] px-10 flex items-center justify-center relative bottom-[-20px] m:bottom-0  space-x-6'>
      {/* search button */}
      <div className='max-w-[500px] bg-white  h-[45px] px-5 rounded-md border-[1px] border-pink flex justify-between items-center  '>
        <input
          type='text'
          placeholder='Looking for something...'
          className=' min-w-[250px] text-[13px] md:text-[16px] md:w-[500px] h-[100%] border-none outline-none font-Poppins'
        />
        <BsSearch fontSize={20} color={'grey'} className='cursor-pointer' />
      </div>

      {/* location button */}
      <div className='hidden md:block'>
        <button className='flex items-center border-none outline-none  rounded-md h-[45px] bg-[rgba(255,255,255,0.92)] px-6 py-2 '>
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
  )
}

export default SearchBox
