import TKSelect from '../../../Reusables/TKSelect'

const Books_And_Games = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='type' />
      <TKSelect placeholder='age level' />
    </div>
  )
}

export default Books_And_Games
