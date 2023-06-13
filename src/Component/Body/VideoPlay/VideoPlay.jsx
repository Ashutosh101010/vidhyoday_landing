import React from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import video from './video/videoplayback.mp4';
// import ControlIcons from './Components/ControlIcons';
// import Video from './video/'C:\Users\indian\Desktop\vidhyoday\src\Component\Body\VideoPlay\video\videoplayback.mp4

const VideoPlay = () => {
  return (
    <div>
{/* <iframe
  width="100%"
  height="700"
  src="https://www.youtube.com/embed/w029CLcRhBE?autoplay=1"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe> */}
      
        <div className='playerDiv'>
          <ReactPlayer width={'100%'} height='100%'
          url={video}
          playing={true}
          muted={true}
          controls={true}
          />
        </div>
     
    </div>
  )
}

export default VideoPlay
