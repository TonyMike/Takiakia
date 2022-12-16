import { SocialIcon } from 'react-social-icons'

// import SocialIcon from 'react-social-icons'

const icons = [
  'https://twitter.com/jaketrent',
  'https://facebook.com/jaketrent',
  'https://instagram.com/jaketrent'
]
const TopNav = () => {
  return (
    <div className='bg-deepGreen h-[44px] flex justify-between pl-40 px-20 items-center w-[100%]'>
      <div>
        <span className='text-[#f1f1f1] mr-10'>support@ojaschool.com</span>
        <a href='tel:+2349164209289' className='text-[#f1f1f1]'>
          +2349164209289
        </a>
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
