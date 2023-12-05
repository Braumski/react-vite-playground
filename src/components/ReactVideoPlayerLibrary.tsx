// Library import
import ReactPlayer from 'react-player'

export default function ReactVideoPlayerLibrary(){
  return (
  <>
    <h3 id="cool-song-title"> Very cool Song </h3>
    <ReactPlayer
      url='https://www.youtube.com/watch?v=i_0G6WPuss4'
      controls='true'
      loop='true'
    />
  </>
  )
  
}