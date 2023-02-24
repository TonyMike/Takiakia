import TKSelect from '../../../Reusables/TKSelect'

const MobilePhone = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='Brand' />
      <TKSelect placeholder='Model' />
      <TKSelect placeholder='RAM' />
      <TKSelect placeholder='Internal Storage' />
      <TKSelect placeholder='Screen Size' />
      <TKSelect placeholder='Color' />
      <TKSelect placeholder='Operating System' />
      <TKSelect placeholder='Display Type' />
      <TKSelect placeholder='Resolution' />
      <TKSelect placeholder='SIM' />
      <TKSelect placeholder='Card Slot' />
      <TKSelect placeholder='Main Camera' />
      <TKSelect placeholder='Selfie Camera' />
      <TKSelect placeholder='Battery (mAh)' />
      <TKSelect placeholder='Exchangable' />
    </div>
  )
}

export default MobilePhone
