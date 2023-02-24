import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const SmartWatchANDTrackers = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='Brand' />
      <InputText placeholder='Model' />
      <TKSelect placeholder='Type' />
      <TKSelect placeholder='Brand Color' />
      <TKSelect placeholder='Brand Material' />
    </div>
  )
}

export default SmartWatchANDTrackers

// <TKSelect
//   key={index}
//   placeholder={item.placeholder}
//   arrList={item.list}
//   enableSearch={item.enableSearch}
// />
