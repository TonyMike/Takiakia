import { NairaIcon } from '../../utils/staticData'

const DetailsOne = () => {
  return (
    <div className='p-3'>
      {/* product price */}
      <h2 className='text-3xl'>
        <NairaIcon />
        {' 280,000'}
      </h2>

      {/* Image and contact information */}
      <div className='flex items-center my-3  space-x-3'>
        <div className='h-16 w-16 rounded-full bg-white shadow-lg'>
          {/* seller avatarx image */}
        </div>

        <div className='flex flex-col space-y-1'>
          <p className='text-pink text-[16px]'>Anthony Oluwajuwon</p>
          <div className=' flex items-center space-x-2 flex-wrap text-grey text-[12px]'>
            <p>Posted 21 hours ago</p>
            <p>Oyo Ibadan</p>
          </div>
        </div>
      </div>

      {/* posted time and location */}
      <div className='pl-5 mt-3 flex items-center space-x-3 '>
        <button className='bg-pink rounded-md text-[12px] text-white px-3 py-2 '>
          Show Number
        </button>
        <div>Wa Fb Tw</div>
      </div>
    </div>
  )
}

export default DetailsOne
