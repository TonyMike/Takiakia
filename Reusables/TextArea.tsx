import { inputProps } from '../@types/types'

const TextArea = ({ placeholder }: inputProps) => {
  return (
    <textarea
      className='max-h-[120px] border-[#A4B6C8]  w-full
      border-[1px] focus:outline-none placeholder-transparent  block focus:ring-2 focus:ring-deepGreen focus:border-transparent
      rounded-sm outline-none min-h-[120px] p-2 text-sm'
      placeholder={placeholder}
    ></textarea>
  )
}

export default TextArea
