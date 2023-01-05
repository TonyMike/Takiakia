import { Grid } from '@mui/material'
import Image from 'next/image'
import { useContext, useRef, useState } from 'react'
import { DetailsContext } from '../../pages/[id]'

const ImageDisplay = () => {
  const data: any = useContext(DetailsContext)
  const imageList = data.images.data.map((i: any, index: any) => {
    return i.attributes.url
  })
  // console.log(imageList)

  const [active, setActive] = useState(0)

  const nextImage = () => {
    setActive(prev => prev + 1)
  }
  const previousImage = () => {
    setActive(prev => prev - 1)
  }

  const handleImageClick = (position: number) => {
    setActive(position)
  }

  return (
    <Grid
      container
      className='h-[400px] lg:h-[420px]  justify-between p-1 shadow-md '
      direction={{
        xs: 'column-reverse',
        md: 'row'
      }}
    >
      <Grid
        item
        container
        direction={{
          xs: 'row',
          md: 'column'
        }}
        xs={2.5}
        md={2.3}
        columnGap={0.5}
        rowGap={0.5}
      >
        {imageList.slice(0, 4).map((x: string, i: number) => {
          if (i === 3) {
            return (
              <Grid
                key={i}
                item
                xs={2.9}
                onClick={() => handleImageClick(i)}
                className='relative cursor-pointer'
              >
                <div className='absolute h-full w-full bg-[rgba(0,0,0,0.5)] z-[1] flex flex-col space-y-[-5px] text-white justify-center items-center'>
                  <p>+{imageList.length - 4}</p>
                  <p className='text-sm md:text-md'>images</p>
                </div>
                <Image src={x} alt='.....' layout='fill' />
              </Grid>
            )
          } else {
            return (
              <Grid
                key={i}
                item
                xs={2.9}
                onClick={() => handleImageClick(i)}
                className='relative cursor-pointer'
              >
                <Image src={x} alt='.....' layout='fill' />
              </Grid>
            )
          }
        })}
      </Grid>

      {/*  preview image */}
      <Grid item xs={9.4} md={9.6} className='relative bg-deepGreen w-full'>
        {/* preview image */}
        <Image
          src={imageList[active]}
          objectFit='cover'
          layout='fill'
          alt={data.title}
        />
      </Grid>
    </Grid>
  )
}

export default ImageDisplay
