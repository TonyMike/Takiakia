import Image from 'next/image'
import SearchBox from '../../Reusables/SearchBox'

const HeroMobile = () => {
  return (
    <div className='h-[210px] sm:h-[270px] w-full relative'>
      <Image
        src='/images/filterHeroImageM.png'
        alt='hero img'
        layout='fill'
        className='z-[-1]'
      />
      <SearchBox />
    </div>
  )
}

const HeroDesktop = () => {
  return (
    <div className='h-[210px] w-full relative'>
      <Image src='/images/filterHeroImageD.png' alt='hero img' layout='fill' />
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
