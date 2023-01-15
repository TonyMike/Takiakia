import Image from 'next/image'
import Link from 'next/link'
import SubscribeButton from '../../../Reusables/SubscribeButton'
import {
  AboutLinks,
  ResourcesLinks,
  SupportLinks
} from '../../../utils/staticData'

const MobileFooter = () => {
  return (
    <div className='px-5 py-3 sm:px-24'>
      <Link href={'/'} passHref>
        <div className='relative h-[40px] w-[120px] z-30 '>
          <Image
            src='/icons/TAKIAKIALOGO.svg'
            alt='takiakia logo'
            layout='fill'
          />
        </div>
      </Link>
      <div className='flex mt-3'>
        <SubscribeButton />
      </div>

      <div className='flex justify-between mt-8 px-3'>
        <div>
          <h3>Support</h3>
          <ul className='text-[12px] [&>*]:my-3 text-[rgba(0,0,0,0.7)]'>
            {SupportLinks.map((link, index) => {
              return (
                <Link href={link.href} key={index} passHref>
                  <li className='my-3'>{link.title}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div>
          <h3>About Us</h3>
          <ul className='text-[12px] text-[rgba(0,0,0,0.7)]'>
            {AboutLinks.map((link, index) => {
              return (
                <Link href={link.href} key={index} passHref>
                  <li className='my-3'>{link.title}</li>
                </Link>
              )
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
          <ul className='text-[12px] text-[rgba(0,0,0,0.7)]'>
            {ResourcesLinks.map((link, index) => {
              return (
                <Link href={link.href} key={index} passHref>
                  <li className='my-3'>{link.title}</li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileFooter
