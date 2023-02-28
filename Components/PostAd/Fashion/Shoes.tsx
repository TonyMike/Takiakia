import TKSelect from '../../../Reusables/TKSelect'

const Shoes = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='type' />
      <TKSelect placeholder='gender' />
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='size' />
      <TKSelect placeholder='color' />
      <TKSelect placeholder='style' />
      <TKSelect placeholder='upper material' />
      <TKSelect placeholder='lining material' />
      <TKSelect placeholder='insole material' />
      <TKSelect placeholder='outsole material' />
      <TKSelect placeholder='decorative elements' />
      <TKSelect placeholder='season' />
      <TKSelect placeholder='exchangeable' />
    </div>
  )
}

export default Shoes
