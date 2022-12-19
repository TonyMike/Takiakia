import { inputProps } from '../@types/types'

const InputText = ({ placeholder }: inputProps) => {
  return (
    <input
      type='text'
      className='border-[1px] outline-none p-2 text-sm rounded-sm w-full border-[#A4B6C8]'
      placeholder={placeholder}
    />
  )
}

export default InputText
