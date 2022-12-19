import SubscribeButton from '../../../Reuseables/SubscribeButton'
import {
  AboutLinks,
  ResourcesLinks,
  SupportLinks
} from '../../../utils/staticData'

const DesktopFooter = () => {
  return (
    <div className='px-5 flex space-x-6 flex-wrap py-3 justify-around'>
      <div>
        <h2 className='mb-4'>Logo</h2>
        <SubscribeButton />
      </div>
      <div>
        <h3>Support</h3>
        <ul className='text-[14px] [&>*]:my-3 text-[rgba(0,0,0,0.7)]'>
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
  )
}

export default DesktopFooter
