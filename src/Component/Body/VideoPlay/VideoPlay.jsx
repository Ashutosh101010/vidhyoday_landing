import React from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import video from './video/videoplayback.mp4';
import './css/videoPlay.css';

const VideoPlay = () => {
  return (
    <div className="videoPlayContainer">
      <div className="videoWrapper">
        <ReactPlayer
          className="videoPlayer"
          url={video}
          playing={true}
          muted={true}
          loop={true}
          controls={false}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPlay;



{/* <iframe
  width="100%"
  height="700"
  src="https://www.youtube.com/embed/w029CLcRhBE?autoplay=1"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe> */}