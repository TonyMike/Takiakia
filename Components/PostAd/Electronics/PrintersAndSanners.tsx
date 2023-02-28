import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const PrintersAndSanners = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='type' />
      <TKSelect placeholder='brand' />
      <InputText placeholder='model' />
    </div>
  )
}

export default PrintersAndSanners
