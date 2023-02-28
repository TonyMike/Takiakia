import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const Software = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <InputText placeholder='software name' />
      <TKSelect placeholder='software type' />
      <TKSelect placeholder='platform' />
      <TKSelect placeholder='format' />
    </div>
  )
}

export default Software
