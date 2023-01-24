import { inputProps } from '../@types/types'

const InputText = ({ placeholder, type }: inputProps) => {
  return (
    <input
      type={type ? type : 'text'}
      className='border-[1px] focus:outline-none focus:ring-2 focus:ring-deepGreen focus:border-transparent outline-none p-2 text-sm rounded-sm w-full border-[#A4B6C8]'
      placeholder={placeholder}
    />
  )
}

export default InputText
