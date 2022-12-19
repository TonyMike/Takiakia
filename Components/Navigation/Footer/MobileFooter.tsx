const MobileFooter = () => {
  return (
    <div className='px-5 py-3 bg-lightPurple'>
      <h2>Logo</h2>
      <div className='flex mt-3'>
        <div className='w-[350px]  rounded-sm border-pink border-[1px]'>
          <input
            type='text'
            placeholder='Provide a valid email'
            className=' outline-none border-[1px] p-2 text-[13px] w-[70%] border-none'
          />
          <button className='bg-pink outline-none border-none p-2 text-white px-4 text-[13px] w-[30%] '>
            Newletter
          </button>
        </div>
      </div>

      <div className='flex justify-between mt-8 px-3'>
        <div>
          <h3>Support</h3>
          <ul className='text-[12px] [&>*]:my-3 text-[rgba(0,0,0,0.7)]'>
            <li>support@takiakia.com</li>
            <li>Tips for safety</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3>About Us</h3>
          <ul className='text-[12px] [&>*]:my-3 text-[rgba(0,0,0,0.7)]'>
            <li>About Takiakia</li>
            <li>Terms and condition</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className='flex justify-between mt-8 px-3'>
        <div>
          <h3>Our App</h3>
          <ul className='[&>*]:my-2 text-[rgba(0,0,0,0.7)]'>
            <li>
              <img src='/icons/android.png' alt='Android' />
            </li>
            <li>
              <img src='/icons/ios.png' alt='Ios' />
            </li>
          </ul>
        </div>

        <div>
          <h3>Our Resources</h3>
          <ul className='text-[12px] [&>*]:my-3 text-[rgba(0,0,0,0.7)]'>
            <li>Our blog</li>
            <li>Twitter</li>
            <li>Takiakia on FB</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileFooter
