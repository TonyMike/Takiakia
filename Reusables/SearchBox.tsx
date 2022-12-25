import { Router, useRouter } from 'next/router'
import { useState } from 'react'
import { BsChevronDown, BsSearch } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { Location } from '../@types/types'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  search: yup.string().required()
})

const SearchBox = ({ noLocation }: Location) => {
  const [search, setSearch] = useState('')
  const route = useRouter()

  const {
    register,
    handleSubmit
    // formState: { error }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const searchSubmit = (data: any) => {
    console.log({ data })
    route.push(`/filter`)
  }

  return (
    <div className=' w-[100%] px-10 flex items-center justify-center relative bottom-[-20px] m:bottom-0  space-x-6'>
      {/* search button */}
      <form onSubmit={handleSubmit(searchSubmit)}>
        <div className='max-w-[500px] bg-white  h-[45px] px-5 rounded-md border-[1px] border-pink flex justify-between items-center  '>
          <input
            type='text'
            placeholder='Looking for something...'
            // onChange={e => setSearch(e.target.value)}
            {...register('search')}
            className=' min-w-[250px] text-[13px] md:text-[16px] md:w-[500px] h-[100%] border-none outline-none font-Poppins'
          />
          <BsSearch
            fontSize={20}
            color={'grey'}
            // onClick={handleSubmit}
            className='cursor-pointer'
          />
        </div>
      </form>

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
