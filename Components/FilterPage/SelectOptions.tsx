import { selectProps } from '../../@types/types'

const SelectOptions = ({ title, arrayList }: selectProps) => {
  return (
    <select className='bg-white no-scrollbar p-2 border-pink border-[1px] px-3 rounded-[4px] text-grey text-[13px]'>
      <option value='all'>{title}</option>
      {arrayList?.map(x => {
        return (
          <option value='all' key={x}>
            {x}
          </option>
        )
      })}
    </select>
  )
}

export default SelectOptions