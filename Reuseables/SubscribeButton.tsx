const SubscribeButton = () => {
  return (
    <div className='w-[350px]  rounded-sm border-pink border-[1px]'>
      <input
        type='text'
        placeholder='Provide a valid email'
        className=' outline-none border-[1px] p-2 text-[13px] w-[70%] border-none'
      />
      <button className='bg-pink outline-none border-none p-2 text-white px-4 text-[13px] w-[30%] '>
        Newletter
      </button>
    </div>
  )
}

export default SubscribeButton
