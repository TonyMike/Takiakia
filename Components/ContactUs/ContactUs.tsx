import { Grid } from '@mui/material'
import Image from "next/legacy/image";
import InputText from '../../Reusables/InputText'
import TextArea from '../../Reusables/TextArea'

const ContactUs = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <div className='p-7 pb-14 md:px-12'>
      <Grid container mt={2} justifyContent='space-evenly'>
        <Grid item xs={12} md={5.5}>
          <h1 className='text-xl text-offBlue font-bold'>Get in Touch</h1>
          <p className='text-[13px] mt-1 mb-5 text-[#808080]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col space-y-5'>
              <div className='flex space-x-3'>
                <InputText placeholder='Your name' />
                <InputText placeholder='Your E-mail' />
              </div>
              <InputText placeholder='Subject' />
              <TextArea placeholder='Write your message' />
              <button className='bg-pink rounded-sm border-none outline-none text-white px-4 py-2 text-sm self-start'>
                Send Mail
              </button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} md={5.5} className='hidden md:block relative'>
          <Image src='/images/contactUs.png' alt='contact us' layout='fill' />
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactUs
