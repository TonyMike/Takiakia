import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const TVAndDvd = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <InputText placeholder='model' />
      <TKSelect placeholder='type' />
      <TKSelect placeholder='exchange possible' />
    </div>
  )
}

export default TVAndDvd
