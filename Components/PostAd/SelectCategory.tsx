import { BsFillPlusCircleFill } from 'react-icons/bs'
import TKSelect from '../../Reusables/TKSelect'

const SelectCategory = () => {
  const selectImages = (e: any) => {
    const selectedImagesArray = Array.from(e.target.files)
    console.log(selectedImagesArray)
  }
  return (
    <div>
      <div className='flex space-x-2'>
        <TKSelect />
        <TKSelect />
      </div>
      {/* <p className='mt-4 font-semibold text-xl'>Add pictures</p>
      <p className='text-darkGrey'>
        First picture is the main displayed picture
      </p> */}
      <div className='mt-4'>image preview</div>
      <label htmlFor='upload'>
        <BsFillPlusCircleFill className='text-6xl text-grey' />
        <input
          type='file'
          multiple
          name='upload'
          aria-label='upload'
          className='hidden'
          id='upload'
          onChange={selectImages}
          accept='image/png image/jpeg image/jpg image/webp  '
        />
      </label>
    </div>
  )
}

export default SelectCategory
