import TKSelect from '../../../Reusables/TKSelect'

const Watches = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='gender' />
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='movement' />
      <TKSelect placeholder='display' />
      <TKSelect placeholder='case material' />
      <TKSelect placeholder='case color' />
      <TKSelect placeholder='band material' />
      <TKSelect placeholder='band color' />
      <TKSelect placeholder='style' />
      <TKSelect placeholder='features' />
      <TKSelect placeholder='exchangeable' />
    </div>
  )
}

export default Watches
