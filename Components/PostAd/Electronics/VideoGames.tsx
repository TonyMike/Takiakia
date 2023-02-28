import InputText from '../../../Reusables/InputText'
import TKSelect from '../../../Reusables/TKSelect'

const VideoGames = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <InputText placeholder='game name' />
      <TKSelect placeholder='genre' />
      <TKSelect placeholder='platform' />
      <TKSelect placeholder='release year' />
      <TKSelect placeholder='release year' />
    </div>
  )
}

export default VideoGames
