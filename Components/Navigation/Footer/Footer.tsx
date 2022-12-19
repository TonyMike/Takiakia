import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

const Footer = () => {
  return (
    <div className='bg-lightPurple'>
      <div className='md:hidden'>
        <MobileFooter />
      </div>
      <div className='hidden md:block'>
        <DesktopFooter />
      </div>
      <div className='bg-deepGreen  flex justify-center p-3 '>
        <p className='text-white text-xs sm:text-sm'>
          &#169; 2022 <span className='tracking-wider ml-1'>Takiakia</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
