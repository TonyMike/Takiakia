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
import SafetyTips from './SafetyTips'
import { Paper } from '@mui/material'

const DetailsOne = () => {
  const data: any = useContext(DetailsContext)
  // console.log(data)
  const [showContact, setShowContact] = useState(false)
  const handleShowContact = () => {
    setShowContact(prev => (prev = true))
  }

  const price = parseInt(data.price.replaceAll(',', '')).toLocaleString()

  return (
    <div className='px-3'>
      {/* product price */}
      <div className='md:bg-lightPurple md:px-3 md:shadow-md md:py-[3px]'>
        <h2 className='text-xl my-2 text-offBlue'>
          <NairaIcon /> {price}
        </h2>
      </div>
      {/* Image and contact information */}
      <div className='flex items-center my-3  space-x-3'>
        <div className='h-16 w-16 rounded-full bg-white relative shadow-lg'>
          {/* seller avatarx image */}
          {/* {data.category.image ? (
            <Image
              src={data.category.image}
              alt={data.category.image}
              layout='fill'
              className='rounded-full'
            />
          ) : (
            <AiOutlineUser className='w-full h-full p-2 text-darkGrey' />
          )} */}
        </div>

        <div className='flex flex-col space-y-1'>
          <p className='text-deepGreen font-medium text-[16px] capitalize'>
            {data.name}
          </p>
          <div className=' flex items-center space-x-3 flex-wrap text-grey text-[12px]'>
            <p className='flex items-center space-x-1 '>
              <AiOutlineFieldTime fontSize={18} className='text-deepGreen' />
              <span>Posted 21 hours ago</span>
            </p>
            <p className='flex items-center space-x-1'>
              <TiLocationOutline className='text-deepGreen' fontSize={18} />
              <span>UI, Ibadan</span>
            </p>
          </div>
        </div>
      </div>

      {/* contact customer */}
      <div className='mt-4 flex-col sm:flex-row md:flex-col space-y-2 flex  space-x-3 '>
        <button
          className={`${
            showContact
              ? 'bg-orange text-white'
              : 'border-orange text-orange border-[1px] '
          } shadow-sm rounded-md text-[13px] md:text-[15px]  outline-none  px-3 py-2 `}
          onClick={handleShowContact}
        >
          {showContact ? '09019404392' : 'Show Number'}
        </button>

        {/* <span className='text-deepGreen'>chat</span> */}
        <div className='flex items-center space-x-3'>
          <span className='text-grey text-sm font-bold uppercase'>chat</span>

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

      <div className='hidden md:block mt-5'>
        <SafetyTips />
      </div>
    </div>
  )
}

export default DetailsOne
