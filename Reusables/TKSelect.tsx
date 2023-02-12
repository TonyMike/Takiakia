import { useMemo, useState } from 'react'
import { BiChevronDown, BiSearch } from 'react-icons/bi'

type SelectProps = {
  placeholder: string
  searchPlaceholder?: string
  requireSearch?: boolean
  arrList: any[]
}
const TKSelect = ({
  placeholder,
  searchPlaceholder,
  requireSearch = false,
  arrList
}: SelectProps) => {
  const [searchInput, setSearchInput] = useState('')
  const [selected, setSelected] = useState('')
  const [show, setShow] = useState(false)

  const filteredItems = useMemo(
    () =>
      arrList.filter(item =>
        item.toLowerCase().includes(searchInput.toLowerCase())
      ),

    [arrList, searchInput]
  )

  return (
    <div className='text-sm w-full relative'>
      <div
        tabIndex={0}
        onClick={() => setShow(prev => !prev)}
        className='bg-white w-[inherit]  p-2 cursor-pointer border-[1px] border-[#A4B6C8] focus-within:ring-deepGreen
        focus:outline-none focus:ring-2 focus:ring-deepGreen focus:border-transparent
        flex justify-between items-center rounded'
      >
        <span className='capitalize text-ellipsis w-full'>
          {selected ? (
            <span className='h-full text-ellipsis w-full'>{selected}</span>
          ) : (
            <span className='text-grey'>{placeholder}</span>
          )}
        </span>
        <BiChevronDown size={20} />
      </div>
      {show ? (
        <ul
          tabIndex={1}
          className=' bg-white absolute w-full shadow-md max-h-60 overflow-y-scroll overflow-x-hidden'
        >
          {requireSearch ? (
            <li className='flex px-2 items-center sticky top-0 bg-white'>
              <BiSearch size={18} className='text-darkGrey inline-block' />
              <input
                type='text'
                placeholder={searchPlaceholder}
                onChange={e => setSearchInput(e.target.value.toLowerCase())}
                className='placeholder:text-sm p-2 text-darkGrey outline-none border-none'
              />
            </li>
          ) : null}
          {filteredItems.map((item, index) => {
            return (
              <li
                onClick={e => {
                  e.preventDefault()
                  setSelected(item)
                  setSearchInput('')
                  setShow(false)
                }}
                key={index}
                className={`p-2 hover:bg-deepGreen capitalize  bg-white cursor-pointer hover:text-white`}
              >
                {item}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default TKSelect
