import SubscribeButton from '../../../Reuseables/SubscribeButton'
import {
  AboutLinks,
  ResourcesLinks,
  SupportLinks
} from '../../../utils/staticData'

const MobileFooter = () => {
  return (
    <div className='px-5 py-3 sm:px-24'>
      <h2 className='mb-3'>Logo</h2>
      <div className='flex mt-3'>
        <SubscribeButton />
      </div>

      <div className='flex justify-between mt-8 px-3'>
        <div>
          <h3>Support</h3>
          <ul className='text-[12px] [&>*]:my-3 text-[rgba(0,0,0,0.7)]'>
            {SupportLinks.map((link, index) => {
              return <li key={index}>{link}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>About Us</h3>
          <ul className='text-[12px] [&>*]:my-3 text-[rgba(0,0,0,0.7)]'>
            {AboutLinks.map((link, index) => {
              return <li key={index}>{link}</li>
            })}
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
            {ResourcesLinks.map((link, index) => {
              return <li key={index}>{link}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileFooter
