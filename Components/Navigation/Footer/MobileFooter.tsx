const MobileFooter = () => {
  return (
    <div className='px-5 py-3 bg-lightPurple'>
      <h2>Logo</h2>
      <div className='flex mt-3'>
        <input
          type='text'
          placeholder='Provide a valid email'
          className='border-pink outline-none border-[1px] p-2 text-[13px] rounded-tl-sm rounded-bl-sm'
        />
        <button className='bg-pink p-2 text-white px-4 text-[13px] rounded-tr-sm rounded-br-sm '>
          Newletter
        </button>
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
    </div>
  )
}

export default MobileFooter
