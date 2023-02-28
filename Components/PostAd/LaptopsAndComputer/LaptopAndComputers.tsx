import TKSelect from '../../../Reusables/TKSelect'

const LaptopAndComputers = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='type' />
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='model' />
      <TKSelect placeholder='subtype' />
      <TKSelect placeholder='processor' />
      <TKSelect placeholder='numbers of cores' />
      <TKSelect placeholder='ram' />
      <TKSelect placeholder='storage capacity' />
      <TKSelect placeholder='storage type' />
      <TKSelect placeholder='display size' />
      <TKSelect placeholder='graphics card' />
      <TKSelect placeholder='graphics card memory' />
      <TKSelect placeholder='operating system' />
      <TKSelect placeholder='color' />
      <TKSelect placeholder='exchangeable' />
    </div>
  )
}

export default LaptopAndComputers
