const Hero = () => {
  return (
    <div
      className={` bg-lightPurple h-[430px] bg-contain bg-no-repeat bg-right bg-[url('/images/heroImage.png')] p-20`}
    >
      <h3 className='text-2xl text-pink'>Best place to sell it!</h3>
      <h2 className='text-4xl w-[500px] mt-3 font-Montserrat text-[#0D0E43]'>
        Buying or selling as a student has never been easier
      </h2>
      <button className='bg-deepGreen shadow-[13px 20px 13px rgba(130, 178, 182, 0.41)] px-20 py-3 rounded-lg text-white text-xl mt-[50px] '>
        Sell it
      </button>
    </div>
  )
}

export default Hero
