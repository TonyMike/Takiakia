import InputText from '../../Reusables/InputText'
import SubmitButton from '../../Reusables/SubmitButton'

const PersonalDetails = () => {
  return (
    <div>
      <form className='flex space-y-6  flex-col'>
        {/* avatar */}
        <div>
          {/* image preview */}
          <div className='h-20 w-20 bg-grey rounded-full'></div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <InputText placeholder='First Name' />
          <InputText placeholder='Last Name' />
        </div>
        <InputText type='email' placeholder='Email Address' />
        <div className='grid grid-cols-2 gap-4'>
          <InputText placeholder='WhatsApp ' required={false} />
          <InputText placeholder='Twitter ' />
        </div>
        <InputText
          type='email'
          placeholder='Instagram'
        />
        <InputText type='email' placeholder='Phone Number' />
        {/* <div className='grid grid-cols-2 gap-4'>
          <InputText placeholder='WhatsApp ' />
          <InputText placeholder='Twitter ' />
        </div> */}

        <SubmitButton text=' Update Profile' />
      </form>
    </div>
  )
}

export default PersonalDetails
