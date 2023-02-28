import TKSelect from '../../../Reusables/TKSelect'

const Bags = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='gender' />
      <TKSelect placeholder='type' />
      <TKSelect placeholder='color' />
      <TKSelect placeholder='exchangeable' />
    </div>
  )
}

export default Bags
