import { inputProps } from '../@types/types'

const TextArea = ({ placeholder }: inputProps) => {
  return (
    <textarea
      className='max-h-[120px] border-[#A4B6C8] border-[1px] rounded-sm outline-none min-h-[120px] p-2 text-sm'
      placeholder={placeholder}
    ></textarea>
  )
}

export default TextArea
