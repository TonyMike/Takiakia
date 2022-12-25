import Image from 'next/image'
import SearchBox from '../../Reusables/SearchBox'

const HeroMobile = () => {
  return (
    <div className='h-[170px] sm:h-[210px] w-full relative'>
      <Image
        src='/images/filterHeroImageM.png'
        alt='hero img'
        className='z-[-1]'
        fill
        sizes='100vw'
      />
      <div className='absolute bottom-[50px] w-full'>
        <SearchBox />
      </div>
    </div>
  )
}

const HeroDesktop = () => {
  return (
    <div className='h-[210px] w-full relative'>
      <Image src='/images/filterHeroImageD.png' alt='hero img' layout='fill' />

      <div className=' relative h-full flex items-center justify-center space-x-5'>
        <h1 className='text-3xl'>Search Result</h1>
        <input
          type='text'
          className='text-md outline-none w-2/5 border-pink border-[1px] p-3 rounded-md'
          placeholder='hp laptop'
        />
      </div>
    </div>
  )
}

const FilterHero = () => {
  return (
    <div>
      <div className='md:hidden'>
        <HeroMobile />
      </div>
      <div className='hidden md:block'>
        <HeroDesktop />
      </div>
    </div>
  )
}

export default FilterHero
