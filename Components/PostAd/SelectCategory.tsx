import Image from 'next/legacy/image'
import { useRef, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import TKSelect from '../../Reusables/TKSelect'
import { States } from '../../utils/staticData'

const SelectCategory = () => {
  const [images, setImages] = useState<any>([])
  const [hoverImage, setHoverImage] = useState(false)
  const selectImages = (e: any) => {
    const selectedImagesArray = Array.from(e.target.files)
    const imagesArray = selectedImagesArray.map((image: any) =>
      URL.createObjectURL(image)
    )
    setImages((previousImages: any[]) => previousImages.concat(imagesArray))
  }
  const imageRef = useRef(null)
  const handleMouseEnter = (e: any, image: string) => {
    console.log(imageRef)
  }
  return (
    <div>
      <h1 className='text-xl text-center md:hidden font-bold mb-9 '>
        Step 1: Category and Images
      </h1>
      <div className='grid grid-cols-2 gap-2 md:gap-4 lg:gap-6'>
        <TKSelect placeholder='Category' enableSearch={true} arrList={States} />
        <TKSelect
          placeholder='Subcategory'
          enableSearch={true}
          searchPlaceholder='Search for a category'
          arrList={States}
        />
      </div>
      <p className='mt-4 font-semibold text-xl'>Add pictures</p>
      <div className='flex flex-col md:flex-row md:space-x-6  '>
        <div className='my-3 '>
          <label htmlFor='upload' className='inline-block cursor-pointer'>
            <BsFillPlusCircleFill className='text-5xl md:text-7xl text-grey' />
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
        <div className='flex flex-wrap '>
          {images &&
            images.map((image: string, index: number) => {
              return (
                <div
                  key={index}
                  className='relative bg-orange h-20 w-20 mb-2 shadow-md ml-1 md:h-24 md:w-24'
                  onMouseEnter={e => handleMouseEnter(e, image)}
                  ref={imageRef}
                >
                  <Image
                    alt='upload image'
                    src={image}
                    layout='fill'
                    objectFit='cover'
                  />

                  {hoverImage ? (
                    <AiFillDelete
                      size={30}
                      onClick={() =>
                        setImages(images.filter((e: any) => e !== image))
                      }
                      className=' absolute mt-1 inline '
                    />
                  ) : null}
                </div>
              )
            })}
        </div>
        {/*
        <div className=' bg-red grid '>
          {images &&
            images.map((image: string) => (
              <div
                key={image}
                className='h-28 w-full flex items-center flex-col'
              >
                <div className='relative  w-full'>
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
        </div> */}
      </div>

      <div>
        <p className='text-sm'>
          Each picture must not exceed 5 mb. <br /> Supported format are * jpg,
          jpeg, webp and * png
        </p>
      </div>
    </div>
  )
}

export default SelectCategory
