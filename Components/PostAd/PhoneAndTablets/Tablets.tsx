import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const Tablets = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='Brand' />
      <TKSelect placeholder='Storage Capacity' />
      <TKSelect placeholder='Screen Size' />
      <TKSelect placeholder='Color' />
      <TKSelect placeholder='Operating System' />
      <TKSelect placeholder='Ram' />
      <TKSelect placeholder='Exchangable' />
    </div>
  )
}

export default Tablets
