import React from 'react';
import './playicon.css';
import DownArrow from './img/Group91.png';
import UpArrow from './img/Group92.png';

const PlayArrowIcon = ({ handleClick, showVideo }) => {
  const handleIconClick = () => {
    handleClick();
  };

  const handleImageClick = () => {
    handleIconClick();
    if (showVideo) {
      document.body.classList.remove('stop-scrolling');
    } else {
      document.body.classList.add('stop-scrolling');
    }
  };

  return (
    <div className="Play-container">
      {showVideo ? (
        <img
          src={DownArrow}
          alt="Play Icon"
          className="Play-icon"
          onClick={handleIconClick}
        />
      ) : (
        <img
          src={UpArrow}
          alt="Play Icon"
          className="Play-icon"
          onClick={handleIconClick}
        />
      )}

    </div>
  );
};

export default PlayArrowIcon;





// import React from 'react';
// import './playicon.css';
// import DownArreow from './img/Group91.png';
// import UpArreow from './img/Group92.png';

// const PlayArrowicon = () => {
//     console.log('DownArreow',DownArreow)
//   return (
//     <div className="Play-container">
//       {/* <a
//         href="https://api.whatsapp.com/send?phone=9403932659"
//         target="_blank"
//         rel="noopener noreferrer"
//       > */}
//         <img
//           src={DownArreow}
//           alt="Play Icon"
//           className="Play-icon"
//         />
//         <img
//           src={UpArreow}
//           alt="Play Icon"
//           className="Play-icon"
//         />
//       {/* </a> */}
//     </div>
//   );
// };

// export default PlayArrowicon;
