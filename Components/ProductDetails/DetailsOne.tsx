import Link from 'next/link'
import { RiWhatsappFill, RiFacebookCircleFill } from 'react-icons/ri'
import {
  AiFillInstagram,
  AiOutlineFieldTime,
  AiOutlineUser
} from 'react-icons/ai'
import { NairaIcon } from '../../utils/staticData'
import { TiLocationOutline } from 'react-icons/ti'

const DetailsOne = () => {
  return (
    <div className='px-3'>
      {/* product price */}
      <h2 className='text-xl my-2 text-offBlue'>
        <NairaIcon />
        {' 280,000'}
      </h2>

      {/* Image and contact information */}
      <div className='flex items-center my-3  space-x-3'>
        <div className='h-16 w-16 rounded-full bg-white shadow-lg'>
          {/* seller avatarx image */}
          <AiOutlineUser className='w-full h-full p-2 text-darkGrey' />
        </div>

        <div className='flex flex-col space-y-1'>
          <p className='text-pink text-[16px]'>Anthony Oluwajuwon</p>
          <div className=' flex items-center space-x-3 flex-wrap text-grey text-[12px]'>
            <p className='flex items-center space-x-1 '>
              <AiOutlineFieldTime fontSize={18} className='text-pink' />
              <span>Posted 21 hours ago</span>
            </p>
            <p className='flex items-center space-x-1'>
              <TiLocationOutline className='text-pink' fontSize={18} />
              <span>Oyo Ibadan</span>
            </p>
          </div>
        </div>
      </div>

      {/* contact customer */}
      <div className='mt-4 flex items-center space-x-3 '>
        <button className='border-pink shadow-sm rounded-md text-[12px] border-[1px] outline-none text-pink px-3 py-2 '>
          Show Number
        </button>

        <span className='text-grey text-sm uppercase'>chat</span>

        {/* <span className='text-deepGreen'>chat</span> */}
        <div className='flex items-center space-x-3'>
          <Link
            href='https://wa.me/+2349019404392'
            target='_blank'
            className='text-3xl'
          >
            <RiWhatsappFill className='text-[#24d366]' />
          </Link>
          <Link
            href='https://wa.me/+2349019404392'
            target='_blank'
            className='text-3xl'
          >
            <RiFacebookCircleFill className='text-[#3b5998]' />
          </Link>
          <Link
            href='https://wa.me/+2349019404392'
            target='_blank'
            className='text-3xl'
          >
            <AiFillInstagram className='text-[#e94475]' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsOne
