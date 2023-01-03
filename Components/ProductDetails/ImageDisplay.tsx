import { Grid } from '@mui/material'
import Image from 'next/image'
import { useContext, useRef, useState } from 'react'
import { DetailsContext } from '../../pages/[id]'

const ImageDisplay = () => {
  const data: any = useContext(DetailsContext)
  const [activeStep, setActiveStep] = useState(0)
  const [selected, setSelected] = useState('')

  const handleImageClick = (image: string, index: number) => {
    setActiveStep(prev => (prev = index))
    setSelected(image)
    console.log(selected, 'selected')
  }
  const imageList = data.images.data
  const firstImage = imageList[0].attributes.url

  return (
    <Grid
      container
      className='h-[400px] lg:h-[420px] lg:py-5 py-2 shadow-md justify-between md:justify-start'
      direction={{
        xs: 'column-reverse',
        md: 'row'
      }}
      columnGap={{ xs: 1, md: 0.7 }}
    >
      <Grid
        item
        xs={3}
        md={2.3}
        className='overflow-y-scroll  no-scrollbar'
        container
        columnGap={0.5}
        rowGap={0.5}
      >
        {imageList.map((item: any, index: any) => {
          const image = item.attributes.url
          return (
            <Grid
              key={index}
              item
              xs={3.9}
              md={12}
              className='relative'
              onClick={() => {
                handleImageClick(image, index)
              }}
            >
              <Image src={image} layout='fill' objectFit='contain' alt='' />
            </Grid>
          )
        })}
      </Grid>

      <Grid item xs={8.9} md={9} className='relative'>
        <Image
          src={selected ? selected : firstImage}
          objectFit='contain'
          layout='fill'
          alt={data.title}
        />
      </Grid>
    </Grid>
  )
}

export default ImageDisplay

{
  /* <Image src={image} layout='fill' alt='some picture' /> */
}
