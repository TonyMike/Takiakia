import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

const Footer = () => {
  return (
    <>
      <div className='md:hidden'>
        <MobileFooter />
      </div>
      <div className='hidden md:block'>
        <DesktopFooter />
      </div>
    </>
  )
}

export default Footer
