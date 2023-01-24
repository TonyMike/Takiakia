import InputText from '../../Reusables/InputText'
import SubmitButton from '../../Reusables/SubmitButton'

const ChangePassword = () => {
  return (
    <div>
      <form className='flex flex-col space-y-4'>
        <InputText placeholder='Enter old password' />
        <InputText placeholder='Enter new password' />
        <InputText placeholder='Confirm new password' />

        <SubmitButton text='Update Password' />
      </form>
    </div>
  )
}

export default ChangePassword
