import TKSelect from '../../../Reusables/TKSelect'

const ComputerHardware = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='type' />
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='model' />
    </div>
  )
}

export default ComputerHardware
