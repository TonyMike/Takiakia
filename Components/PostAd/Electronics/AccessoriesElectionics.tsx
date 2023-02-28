import TKSelect from '../../../Reusables/TKSelect'

const AccessoriesElectronics = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brand' />
      <TKSelect placeholder='type' />
      <TKSelect placeholder='connectivity' />
    </div>
  )
}

export default AccessoriesElectronics
