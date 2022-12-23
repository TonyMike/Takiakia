import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { RiArrowUpDownLine } from 'react-icons/ri'
import { selectProps } from '../../@types/types'
import { States } from '../../utils/staticData'
import SelectOptions from './SelectOptions'

const FilterCategory = () => {
  // const route = useRouter()
  // console.log(route)

  const showOptions = () => {}
  return (
    <div className='mb-2'>
      {/* <div className='relative top-[30px] w-40'>
        <SelectOptions />
      </div> */}
      {/* mobile filter  */}
      <div className='md:hidden'>
        <div className='flex space-x-4 w-full pb-4 overflow-x-scroll no-scrollbar'>
          {/* All State */}
          <SelectOptions title='All State' arrayList={States} />
          <SelectOptions title='School' />
          <SelectOptions title='Category' />
          <SelectOptions title='SubCategory' />
          <SelectOptions title='Price' />
          <SelectOptions title='Condition' />
        </div>
        <div className='flex justify-end'>
          <div className='flex space-x-2'>
            <p className='text-grey text-sm'>Sort by:</p>
            <button className='flex items-center text-sm space-x-1'>
              <RiArrowUpDownLine className='text-deepGreen' />
              <span className='#464b4f'>Newest</span>
            </button>
          </div>
        </div>
      </div>

      {/* desktop filter */}
      <div className='hideen md:block'></div>
    </div>
  )
}

export default FilterCategory
