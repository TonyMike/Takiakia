import { Grid } from '@mui/material'
import Image from 'next/image'
import { useContext } from 'react'
import { DetailsContext } from '../../pages/[id]'

const ImageDisplay = () => {
  const data: any = useContext(DetailsContext)
  return (
    <Grid
      container
      className='h-[400px]'
      direction={{
        xs: 'column-reverse',
        md: 'row'
      }}
    >
      <Grid
        item
        xs={3}
        md={2.3}
        className='overflow-y-scroll  no-scrollbar'
        container
      >
        {data.images.map((image: string, index: any) => {
          return (
            <Grid key={index} item xs={4} md={12} className='relative'>
              <Image src={image} layout='fill' alt={`${data.title}`} />
            </Grid>
          )
        })}
      </Grid>
      <Grid item xs={9} md={9.7} className='relative'>
        <Image
          src={`${data.category.image}`}
          layout='fill'
          alt={`${data.title}`}
        />
      </Grid>
    </Grid>
  )
}

export default ImageDisplay
