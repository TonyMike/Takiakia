import { BiPhoneCall } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { SocialIcon } from 'react-social-icons'

// import SocialIcon from 'react-social-icons'

const icons = [
  'https://twitter.com/jaketrent',
  'https://facebook.com/jaketrent',
  'https://instagram.com/jaketrent'
]
const TopNav = () => {
  return (
    <div className='bg-deepGreen h-[44px] flex justify-between px-7 sm:pl-28 sm:px-20 items-center w-[100%]'>
      <div className='flex space-x-3'>
        <div>
          <span className='text-[#f1f1f1] hidden md:block mr-10'>
            support@ojaschool.com
          </span>
          <span className='md:hidden'>
            <TfiEmail className='text-white cursor-pointer' fontSize={20} />
          </span>
        </div>
        <div>
          <a
            href='tel:+2349164209289'
            className=' hidden md:block text-[#f1f1f1]'
          >
            +2349164209289
          </a>
          <span className='md:hidden'>
            <BiPhoneCall
              className='text-navyBlue cursor-pointer'
              fontSize={20}
            />
          </span>
        </div>
      </div>
      <div>
        <span className='w-8 h-8'>
          {icons.map(icon => {
            return (
              <SocialIcon
                key={icon}
                url={icon}
                fgColor='white'
                className='m-1'
                style={{ height: '24px', width: '24px' }}
              />
            )
          })}
        </span>
      </div>
    </div>
  )
}

export default TopNav
