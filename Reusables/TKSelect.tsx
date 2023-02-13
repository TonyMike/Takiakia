import { useMemo, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { SelectProps } from '../@types/types'

const TKSelect = ({
  placeholder,
  arrList,
  required = true,
  enableSearch = true
}: SelectProps) => {
  const [searchInput, setSearchInput] = useState('')
  const [selected, setSelected] = useState('')
  const [showList, setShowList] = useState(false)
  const handleInputChange = (e: any) => {
    setSearchInput(e.target.value.toLowerCase())
  }

  const filteredItems = useMemo(
    () =>
      arrList.filter(item =>
        item.toLowerCase().includes(searchInput.toLowerCase())
      ),

    [searchInput]
  )

  const handleSelectedItem = (item: any) => {
    // e.preventDefault()
    setSelected(item)
    setSearchInput(item)
    setShowList(false)
    // alert(selected)
  }
  const handleShowList = () => {
    setShowList(!showList)
  }

  return (
    <div className='relative'>
      <input
        type={'text'}
        contentEditable={false}
        value={
          enableSearch
            ? searchInput
            : selected.charAt(0).toUpperCase() + selected.slice(1)
        }
        onClick={handleShowList}
        className={`
        peer border-[1px] focus:outline-none placeholder-transparent  block focus:ring-2 focus:ring-deepGreen focus:border-transparent outline-none p-2 text-sm rounded-sm w-full border-[#A4B6C8]
      `}
        id={placeholder}
        name={placeholder}
        // value={selected}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <BiChevronDown
        size={25}
        onClick={handleShowList}
        className={` ${
          showList ? 'rotate-180' : '-rotate-0'
        }  text-darkGrey absolute top-2 cursor-pointer transition-all right-2`}
      />

      <label
        htmlFor={placeholder}
        className={`text-darkGrey peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:text-grey absolute left-0 -top-5 text-sm ${
          placeholder.length > 3 ? 'capitalize' : 'uppercase'
        }`}
      >
        {placeholder}
        {required ? (
          <span
            className={`${
              searchInput.length > 0 ? 'inline text-red' : 'hidden'
            }`}
          >
            *
          </span>
        ) : null}
      </label>

      {/* array list */}
      <ul
        tabIndex={1}
        className={` ${
          showList ? 'block' : 'hidden'
        } bg-white z-10 mt-1 absolute w-full shadow-md max-h-60 overflow-y-scroll overflow-x-hidden`}
      >
        {enableSearch
          ? filteredItems.map((item, index) => {
              return (
                <li
                  onClick={() => handleSelectedItem(item)}
                  key={index}
                  className={`p-2 hover:bg-deepGreen capitalize text-sm  border-b-[1px] border-[#ebebeb] bg-white cursor-pointer hover:text-white`}
                >
                  {item}
                </li>
              )
            })
          : arrList.map((item, index) => {
              return (
                <li
                  onClick={() => handleSelectedItem(item)}
                  key={index}
                  className={`p-2 hover:bg-deepGreen capitalize  border-b-[1px] text-sm border-[#ebebeb] bg-white cursor-pointer hover:text-white`}
                >
                  {item}
                </li>
              )
            })}
      </ul>
    </div>
  )

  // return (
  //   <div className='text-sm w-full relative'>
  //     <div
  //       id={placeholder}
  //       tabIndex={0}
  //       onClick={() => setShow(prev => !prev)}
  //       className='bg-white w-[inherit]  p-2 cursor-pointer border-[1px] border-[#A4B6C8] focus-within:ring-deepGreen
  //       focus:outline-none focus:ring-2 focus:ring-deepGreen focus:border-transparent
  //       flex justify-between items-center rounded'
  //     >
  //       <label className='capitalize  text-ellipsis w-full'>
  //         {selected ? (
  //           <span className='h-full text-ellipsis w-full'>{selected}</span>
  //         ) : (
  //           <span className='text-grey'>{placeholder}</span>
  //         )}
  //       </label>
  //       {/* <BiChevronDown size={20} /> */}
  //     </div>
  //     {show ? (
  //       <ul
  //         tabIndex={1}
  //         className=' bg-white z-10 absolute w-full shadow-md max-h-60 overflow-y-scroll overflow-x-hidden'
  //       >
  //         {requireSearch ? (
  //           <li className='flex px-2 items-center sticky top-0 bg-white'>
  //             <BiSearch size={18} className='text-darkGrey inline-block' />
  //             <input
  //               type='text'
  //               placeholder={searchPlaceholder}
  //               onChange={e => setSearchInput(e.target.value.toLowerCase())}
  //               className='placeholder:text-sm p-2 text-darkGrey outline-none border-none'
  //             />
  //           </li>
  //         ) : null}
  //         {filteredItems.map((item, index) => {
  //           return (
  //             <li
  //               onClick={e => {
  //                 e.preventDefault()
  //                 setSelected(item)
  //                 setSearchInput('')
  //                 setShow(false)
  //               }}
  //               key={index}
  //               className={`p-2 hover:bg-deepGreen capitalize  bg-white cursor-pointer hover:text-white`}
  //             >
  //               {item}
  //             </li>
  //           )
  //         })}
  //       </ul>
  //     ) : null}
  //   </div>
  // )
}

export default TKSelect
