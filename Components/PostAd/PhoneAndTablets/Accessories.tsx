import TKSelect from '../../../Reusables/TKSelect'

const Accessories = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='Brand' />
      <TKSelect placeholder='Type' />
    </div>
  )
}

export default Accessories
