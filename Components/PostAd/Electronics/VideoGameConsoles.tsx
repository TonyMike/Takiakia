import TKSelect from '../../../Reusables/TKSelect'

const VideoGameConsoles = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='type' />
      <TKSelect placeholder='exchangeable' />
    </div>
  )
}

export default VideoGameConsoles
