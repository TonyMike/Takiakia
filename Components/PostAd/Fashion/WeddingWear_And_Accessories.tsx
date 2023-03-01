import TKSelect from '../../../Reusables/TKSelect'

const WeddingWear_And_Accessories = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='type' />
      <TKSelect placeholder='brand' />
    </div>
  )
}

export default WeddingWear_And_Accessories
