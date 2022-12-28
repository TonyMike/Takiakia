import { NairaIcon } from '../../utils/staticData'

const TimeStamp = () => {
  return (
    <div className=' flex items-center text-grey text-[13px]'>
      <p>Posted 21 hours ago</p>
      <p>Oyo Ibadan</p>
    </div>
  )
}
const DetailsOne = () => {
  return (
    <div className='p-3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl'>
          <NairaIcon />
          {' 280,000'}
        </h2>
        <div>
          <TimeStamp />
        </div>
      </div>

      <div>
        <div>{/* seller avatarx image */}</div>
        <div>
          <p>Anthony Oluwajuwon</p>
          <button>Contact Seller</button>
        </div>
      </div>
      <div>
        <TimeStamp />
        <p>Oyo Ibadan</p>
      </div>
    </div>
  )
}

export default DetailsOne
