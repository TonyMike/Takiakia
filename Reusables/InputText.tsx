import { useState } from 'react'
import { inputProps } from '../@types/types'

const InputText = ({
  placeholder,
  type,
  disable = false,
  required = true
}: inputProps) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div className='relative'>
      <input
        type={type ? type : 'text'}
        disabled={disable}
        className='peer border-[1px] focus:outline-none placeholder-transparent  block focus:ring-2 focus:ring-deepGreen focus:border-transparent outline-none p-2 text-sm rounded-sm w-full border-[#A4B6C8]
        '
        id={placeholder}
        name={placeholder}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <label
        htmlFor={placeholder}
        className={`text-darkGrey cursor-text peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:text-grey absolute left-0 -top-5 text-sm `}
      >
        {placeholder}{' '}
        {required ? (
          <span
            className={`${
              inputValue.length > 0 ? 'inline text-red' : 'hidden'
            }`}
          >
            *
          </span>
        ) : null}
      </label>
    </div>
  )
}

export default InputText
