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
    <div className='font-medium w-full relative'>
      <div
        tabIndex={0}
        onClick={() => setShow(prev => !prev)}
        className='bg-white w-[inherit]  p-2 cursor-pointer focus-within:border-deepGreen border-2 border-grey flex justify-between items-center rounded'
      >
        <span className='capitalize text-ellipsis'>
          {selected ? (
            selected.length > 25 ? (
              selected.substring(0, 25) + '...'
            ) : (
              selected
            )
          ) : (
            <span className='text-darkGrey'>{placeholder}</span>
          )}
        </span>
        <BiChevronDown size={20} />
      </div>
      {show ? (
        <ul
          tabIndex={1}
          className='mt-2 bg-white absolute w-full shadow-md max-h-60 overflow-y-scroll overflow-x-hidden'
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
                className={`p-2 hover:bg-deepGreen  bg-white cursor-pointer hover:text-white`}
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
