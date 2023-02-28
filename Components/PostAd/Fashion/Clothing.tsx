import TKSelect from '../../../Reusables/TKSelect'

const Clothing = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='type' />
      <TKSelect placeholder='color' />
      <TKSelect placeholder='exchangeable' />
      <TKSelect placeholder='made in nigeria' />
      <TKSelect placeholder='handmade' />
    </div>
  )
}

export default Clothing
