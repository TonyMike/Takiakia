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
  const [show, setShow] = useState(false)

  const showOptions = () => {
    setShow(!show)
  }
  return (
    <div className='mb-2'>
      {/* mobile filter  */}
      <div className='md:hidden'>
        <div className='flex space-x-4 w-full  pb-4 overflow-x-scroll '>
          {/* All State */}
          <SelectOptions title='All State' arrayList={States} />
          <SelectOptions title='School' />
          <SelectOptions title='Category' />
          <SelectOptions title='SubCategory' />
          <SelectOptions title='Price' />
          <SelectOptions title='Condition' />
        </div>
        <div className='flex justify-end mt-1 pr-[2px]'>
          <div className='flex space-x-2 relative'>
            <p className='text-grey text-sm'>Sort by:</p>
            <button
              className='flex items-center text-sm space-x-1'
              onClick={showOptions}
            >
              <RiArrowUpDownLine className='text-deepGreen ' />
              <span className='text-[#464b4f]'>Newest</span>
            </button>
            {show ? (
              <ul className='absolute top-5 bg-white right-0 shadow-md '>
                {Array(3)
                  .fill('')
                  .map(li => {
                    return (
                      <li
                        key={li}
                        className='text-[13px]  cursor-pointer text-[#464b4f] pl-2  py-2 w-32 hover:bg-deepGreen hover:text-white right-[40px]'
                      >
                        Lowest price first
                      </li>
                    )
                  })}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      {/* desktop filter */}
      <div className='hidden md:block md:w-[250px] p-3 px-4 '>
        <div>
          <h2 className='text-[20px] mb-2 tracking-wider text-navyBlue font-extrabold'>
            Filter
          </h2>
          <div className='flex flex-col space-y-4'>
            <SelectOptions title='All State' arrayList={States} />
            <SelectOptions title='School' />
            <SelectOptions title='Category' />
            <SelectOptions title='Subcategory' />
            <SelectOptions title='Price' />
            <SelectOptions title='Condition' />
            <div className='flex  mt-1 pr-[2px]'>
              <div className='flex space-x-2 items-center relative'>
                <p className='text-grey text-md'>Sort by:</p>
                <button
                  className='flex items-center text-md space-x-1'
                  onClick={showOptions}
                >
                  <RiArrowUpDownLine className='text-deepGreen ' />
                  <span className='text-[#464b4f]'>Newest</span>
                </button>
                {show ? (
                  <ul className='absolute top-5 bg-white right-0 shadow-md '>
                    {Array(3)
                      .fill('')
                      .map(li => {
                        return (
                          <li
                            key={li}
                            className='text-[14px] cursor-pointer text-[#464b4f] pl-2  py-2 w-32 hover:bg-deepGreen hover:text-white right-[40px]'
                          >
                            Lowest price first
                          </li>
                        )
                      })}
                  </ul>
                ) : null}
              </div>
            </div>
            <button className='pink-btn'>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterCategory
