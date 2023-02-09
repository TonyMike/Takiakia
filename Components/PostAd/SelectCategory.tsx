import Image from 'next/legacy/image'
import { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import TKSelect from '../../Reusables/TKSelect'
import { States } from '../../utils/staticData'

const SelectCategory = () => {
  const [images, setImages] = useState<any>([])
  const selectImages = (e: any) => {
    const selectedImagesArray = Array.from(e.target.files)
    const imagesArray = selectedImagesArray.map((image: any) =>
      URL.createObjectURL(image)
    )
    setImages((previousImages: any[]) => previousImages.concat(imagesArray))
  }
  return (
    <div>
      <div className='grid grid-cols-2 gap-2 md:gap-4 lg:gap-6'>
        <TKSelect
          placeholder='Category'
          requireSearch={true}
          searchPlaceholder='Search'
          arrList={States}
        />
        <TKSelect
          placeholder='Category'
          requireSearch={true}
          searchPlaceholder='Search for a category'
          arrList={States}
        />
      </div>
      <p className='mt-4 font-semibold text-xl'>Add pictures</p>
      {/* <p className='text-darkGrey'>
        First picture is the main displayed picture
      </p> */}
      <div className='my-3 '>
        <label htmlFor='upload' className='inline-block cursor-pointer'>
          <BsFillPlusCircleFill className='text-8xl text-grey' />
          <input
            type='file'
            multiple
            name='upload'
            aria-label='upload'
            className='hidden '
            id='upload'
            onChange={selectImages}
            accept='image/png , image/jpeg , image/jpg , image/webp  '
          />
        </label>
      </div>
      <div className='grid grid-cols-4 gap-4 md:grid-cols-7 lg:grid-cols-12 '>
        {images &&
          images.map((image: string) => (
            <div key={image} className='h-28 w-full flex items-center flex-col'>
              <div className='relative h-[75%] w-full'>
                <Image
                  src={image}
                  alt='upload image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <MdDelete
                onClick={() =>
                  setImages(images.filter((e: any) => e !== image))
                }
                className='h-[20%] mt-1 inline text-4xl'
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default SelectCategory
