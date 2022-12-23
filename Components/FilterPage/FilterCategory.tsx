import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { selectProps } from '../../@types/types'
import { States } from '../../utils/staticData'
import SelectOptions from './SelectOptions'

const FilterCategory = () => {
  // const route = useRouter()
  // console.log(route)

  const showOptions = () => {}
  return (
    <div>
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
        <div></div>
      </div>

      {/* desktop filter */}
      <div className='hideen md:block'></div>
    </div>
  )
}

export default FilterCategory
