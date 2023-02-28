import TKSelect from '../../../Reusables/TKSelect'

const ComputerMonitors = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='type' />
    </div>
  )
}

export default ComputerMonitors
