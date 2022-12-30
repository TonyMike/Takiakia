import Link from 'next/link'
import { RiWhatsappFill, RiFacebookCircleFill } from 'react-icons/ri'
import {
  AiFillInstagram,
  AiOutlineFieldTime,
  AiOutlineUser
} from 'react-icons/ai'
import { NairaIcon } from '../../utils/staticData'
import { TiLocationOutline } from 'react-icons/ti'
import { useContext, useState } from 'react'
import { DetailsContext } from '../../pages/[id]'
import Image from 'next/image'

const DetailsOne = () => {
  const data: any = useContext(DetailsContext)

  const [showContact, setShowContact] = useState(false)
  const handleShowContact = () => {
    setShowContact(prev => (prev = true))
  }
  return (
    <div className='px-3'>
      {/* product price */}
      <h2 className='text-xl my-2 text-offBlue'>
        <NairaIcon />
        {`${data.price}`}
      </h2>

      {/* Image and contact information */}
      <div className='flex items-center my-3  space-x-3'>
        <div className='h-16 w-16 rounded-full bg-white relative shadow-lg'>
          {/* seller avatarx image */}
          {data.category.image ? (
            <Image
              src={data.category.image}
              alt={data.category.image}
              layout='fill'
              className='rounded-full'
            />
          ) : (
            <AiOutlineUser className='w-full h-full p-2 text-darkGrey' />
          )}
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
              <span>UI, Ibadan</span>
            </p>
          </div>
        </div>
      </div>

      {/* contact customer */}
      <div className='mt-4 flex items-center space-x-3 '>
        <button
          className={`${
            showContact
              ? 'bg-pink text-white'
              : 'border-pink text-pink border-[1px] '
          } shadow-sm rounded-md text-[12px]  outline-none  px-3 py-2 `}
          onClick={handleShowContact}
        >
          {showContact ? '09019404392' : 'Show Number'}
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
