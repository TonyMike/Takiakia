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
  }

  return (
    <Grid
      container
      className='h-[400px]  justify-between md:justify-start'
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
        {data.images.map((image: string, index: any) => {
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
              {/* <Image src={image} layout='fill' alt={`${data.title}`} /> */}
              <Image
                // src={selected ? selected : data.images[0]}
                src='/images/iphone13.jpg'
                layout='fill'
                alt={data.title}
              />
            </Grid>
          )
        })}
      </Grid>

      <Grid item xs={8.9} md={9} className='relative'>
        <Image
          // src={selected ? selected : data.images[0]}
          src='/images/iphone13.jpg'
          layout='fill'
          alt={data.title}
        />
      </Grid>
    </Grid>
  )
}

export default ImageDisplay
