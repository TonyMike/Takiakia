import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const Headphones = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <InputText placeholder='model' />
      <TKSelect placeholder='type' />
      <TKSelect placeholder='form factor' />
      <TKSelect placeholder='connectivity' />
      <TKSelect placeholder='connecting interface' />
      <TKSelect placeholder='resistance (ohm)' />
      <TKSelect placeholder='color' />
    </div>
  )
}

export default Headphones
