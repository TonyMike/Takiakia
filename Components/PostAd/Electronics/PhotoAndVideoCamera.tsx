import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const PhotoAndVideoCamera = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='type' />
      <TKSelect placeholder='make' />
      <InputText placeholder='model' />
    </div>
  )
}

export default PhotoAndVideoCamera
