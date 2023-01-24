const SafetyTips = () => {
  return (
    <div className='shadow-md bg-lightGreen  p-4'>
      <h3 className='text-center mb-2 font-semibold'>Safety Tips</h3>
      <ul className='list-disc text-sm text-darkGrey ml-5 [&>li]:my-[6px] '>
        <li> Meet the seller at a safe public place</li>
        <li>{`Don't pay in advance, including for delivery `}</li>
        <li>{` Inspect the item and ensure it's exactly what you want `}</li>
        <li>{`Only pay when you're satisfied`}</li>
        <li>
          On delivery, check that the item delivered is what was inspected
        </li>
      </ul>
    </div>
  )
}

export default SafetyTips
