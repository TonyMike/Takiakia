import TKSelect from '../../../Reusables/TKSelect'

const Jewelry = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='gender' />
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='type' />
      <TKSelect placeholder='main material' />
      <TKSelect placeholder='main stone' />
      <TKSelect placeholder='color' />
      <TKSelect placeholder='exchangeable' />
    </div>
  )
}

export default Jewelry
