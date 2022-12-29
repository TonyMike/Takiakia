import { Grid } from '@mui/material'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookCircleFill, RiWhatsappFill } from 'react-icons/ri'

const ProductDescription = () => {
  return (
    <div className='px-3'>
      <p className='text-[16px] text-offBlue'>Product Description</p>
      <p className='text-[13px] my-1'>
        Lightweight design is easy for carrying: Made From Durable Eco-Friendly
        Nylon Fabric With Two "S" Curve Padded Shoulder Straps, Shoulder belt
        made of honeycomb breathable material, Ergonomic design ensures the
        dispersion of gravity of the backpack Lightweight design is easy for
        carrying.
      </p>
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
            className='text-2xl'
          >
            <RiWhatsappFill className='text-[#24d366]' />
          </Link>
          <Link
            href='https://wa.me/+2349019404392'
            target='_blank'
            className='text-2xl'
          >
            <RiFacebookCircleFill className='text-[#3b5998]' />
          </Link>
          <Link
            href='https://wa.me/+2349019404392'
            target='_blank'
            className='text-2xl'
          >
            <AiFillInstagram className='text-[#e94475]' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
