import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const Headphones = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <InputText placeholder='model' />
      <TKSelect placeholder='type' />
      <InputText placeholder='form factor' />
      <InputText placeholder='connectivity' />
      <InputText placeholder='connecting interface' />
      <InputText placeholder='resistance (ohm)' />
      <InputText placeholder='color' />
    </div>
  )
}

export default Headphones
