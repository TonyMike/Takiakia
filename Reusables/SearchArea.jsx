import { AiOutlineSearch } from 'react-icons/ai'

const SearchArea = () => {
  return (
    <div className=' w-full h-10 flex border-orange shadow-sm'>
      <input
        type='text'
        placeholder='What are you looking?'
        className='outline-none px-3 text-sm w-[85%] md:w-[90%]'
      />
      <div className=' w-[15%] md:w-[10%] bg-deepGreen flex items-center justify-center'>
        <AiOutlineSearch className='text-white text-xl' />
      </div>
    </div>
  )
}

export default SearchArea
