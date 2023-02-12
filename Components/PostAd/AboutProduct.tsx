import { useState } from 'react'
import InputText from '../../Reusables/InputText'
import TextArea from '../../Reusables/TextArea'
import TKSelect from '../../Reusables/TKSelect'
import { Conditions } from '../../utils/staticData'
import MobileCategorySelection from './MobileCategorySelection'

const AboutProduct = () => {
  const [checkState, setCheckState] = useState(false)
  return (
    <div>
      <h1 className='text-xl text-center md:hidden font-bold mb-5 '>
        Step 2: About Product
      </h1>
      <div className='grid md:grid-cols-2 gap-4 my-5'>
        <InputText placeholder='Title i.e Iphone 11 pro max 64gb' />
      </div>

      {/* if the category is mobile */}
      <MobileCategorySelection />

      <div className='w-full'>
        <TextArea placeholder='Description*' />
      </div>
      <div className='grid grid-cols-2  gap-4 my-5'>
        <InputText placeholder='Price 20,0000' />
        <TKSelect placeholder={'Condition'} arrList={Conditions} />
      </div>
      <p className='flex space-x-2 ml-5'>
        <input
          type='checkbox'
          id='negotiate'
          className=' checked:bg-red'
          onChange={e => setCheckState(e.target.checked)}
        />
        <label htmlFor='negotiate' className='text-sm '>
          Negotiable
        </label>
      </p>
      <div className='grid grid-cols-2 gap-4 my-5'>
        <InputText placeholder='0905438440' disable={true} />
        <InputText placeholder='Tony Michael' disable={true} />
      </div>
    </div>
  )
}

export default AboutProduct
