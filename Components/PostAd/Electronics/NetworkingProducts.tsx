import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const NetworkingProducts = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <InputText placeholder='model' />
      <TKSelect placeholder='type' />
    </div>
  )
}

export default NetworkingProducts
