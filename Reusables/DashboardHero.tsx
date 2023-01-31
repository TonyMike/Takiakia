import Image from 'next/legacy/image'

type dashboardProps = {
  header: string
  icon?: any
}
const DashboardHero = ({ header, icon }: dashboardProps) => {
  return (
    <div className='h-28 md:h-48 bg-deepGreen flex items-center px-3 md:px-44'>
      <h1 className='uppercase text-2xl md:text-5xl text-white font-semibold'>{header}</h1>
    </div>
  )
}

export default DashboardHero
