import { Grid } from '@mui/material'
import Link from 'next/link'
import { useContext } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookCircleFill, RiWhatsappFill } from 'react-icons/ri'
import { DetailsContext } from '../../pages/[id]'

const ProductDescription = () => {
  const data: any = useContext(DetailsContext)

  return (
    <div className='px-3'>
      <p className='text-[16px] text-offBlue'>Product Description</p>
      <p className='text-[13px] my-1'>{data.description}.</p>
      <div className='my-4'>
        <Grid container rowGap={2}>
          {Array(7)
            .fill('')
            .map((x, i) => {
              return (
                <Grid key={i} item xs={6}>
                  <p className='text-sm'>
                    <span className='font-bold'>Brand: </span>
                    <span className='text-darkGrey'>Adidas</span>
                  </p>
                </Grid>
              )
            })}
        </Grid>
      </div>
      <div className='mb-3'>
        <p className='uppercase text-grey text-[15px] mb-1'>
          Share this product
        </p>
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

export default ProductDescription
