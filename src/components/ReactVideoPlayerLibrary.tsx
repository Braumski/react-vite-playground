// Library import
import ReactPlayer from 'react-player'

export default function ReactVideoPlayerLibrary(){
  /* This component is basically pointless, since I could just put
  the react-player directly in the App Component, but I want a clear File
  structure for now (but it does hide the ugly props from the app component :)*/
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