import InputText from '../../Reusables/InputText'
import SubmitButton from '../../Reusables/SubmitButton'

const PersonalDetails = () => {
  return (
    <div>
      <form className='flex space-y-4  flex-col'>
        {/* avatar */}
        <div>
          {/* image preview */}
          <div className='h-20 w-20 bg-grey rounded-full'></div>
        </div>
        <div className='flex space-x-4'>
          <InputText placeholder='First Name' />
          <InputText placeholder='Last Name' />
        </div>
        <InputText type='email' placeholder='Email Address' />
        <div className='flex space-x-4'>
          <InputText placeholder='WhatsApp i.e https://wa.me/+2348129384732' />
          <InputText placeholder='Twitter i.e https://twitter.com/johnsmith' />
        </div>
        <InputText
          type='email'
          placeholder='Instagram i.e https://instagram.com/johnsmith'
        />
        <InputText type='email' placeholder='Phone number i.e 09019404392' />
        <div className='flex space-x-4'>
          <InputText placeholder='WhatsApp i.e https://wa.me/+2348129384732' />
          <InputText placeholder='Twitter i.e https://twitter.com/johnsmith' />
        </div>

        <SubmitButton text=' Update Profile' />
      </form>
    </div>
  )
}

export default PersonalDetails
