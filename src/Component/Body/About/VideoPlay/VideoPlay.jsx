import React from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import video from './video/videoplayback.mp4';
// import './css/videoPlay.css';
// import ControlIcons from './ControlIcons/';
// import ControlIcons from './ControlIcons';


const VideoPlay = () => {
  return (
    <div >
      <div >
        <ReactPlayer
          width='100%'
          height='100%'
          url={video}
          playing={true}
          muted={true}
          loop={true} // Enable auto loop
          controls={false}
        />
      </div>
    </div>
  )
}

export default VideoPlay
