import { useState } from 'react'
import InputText from '../../Reusables/InputText'
import TextArea from '../../Reusables/TextArea'
import TKSelect from '../../Reusables/TKSelect'
import { Conditions } from '../../utils/staticData'
import Accessories from './PhoneAndTablets/Accessories'
import Tablets from './PhoneAndTablets/Tablets'

const AboutProduct = () => {
  const [checkState, setCheckState] = useState(false)
  return (
    <div className='mt-10'>
      <h1 className='text-xl text-center md:hidden font-bold mb-10'>
        Step 2: About Product
      </h1>
      <div className='grid md:grid-cols-2 gap-4 my-7'>
        <InputText placeholder='Title' required={true} />
      </div>

      {/* if the category is mobile */}
      {/* <MobilePhone /> */}

      {/* if the category is smartwatches and trackers */}
      {/* <SmartWatchANDTrackers /> */}

      {/* <Tablets /> */}

      <Accessories />

      <div className='w-full'>
        <TextArea placeholder='Description*' />
      </div>
      <div className='my-7' />
      <div className='grid grid-cols-2   gap-4 my-5'>
        <InputText placeholder='Price' />
        <TKSelect
          placeholder={'Condition'}
          arrList={Conditions}
          enableSearch={false}
        />
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
