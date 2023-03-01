import TKSelect from '../../../Reusables/TKSelect'

const CampingGears = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='type' />
      <TKSelect placeholder='color' />
      <TKSelect placeholder='Item Length (cm)' />
      <TKSelect placeholder='Item  Width (cm)' />
      <TKSelect placeholder='Item  Height (cm)' />
      <TKSelect placeholder='Item  Weight (g)' />
    </div>
  )
}

export default CampingGears
