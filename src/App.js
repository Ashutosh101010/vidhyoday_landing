import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Component/NavBar/Header';
import Menubar from './Component/Menubar/Menubar';
import Footer from './Component/Footer/Footer';
import Body from './Component/Body/Body';
import VideoPlay from './Component/Body/VideoPlay/VideoPlay';
import PlayArrowIcon from './Component/Body/PlayArrowicon/PlayArrowicon';

function App() {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

  const [headerCourse, setHeaderCourse] = useState(false);

  const scrollDownC = () => {
    setHeaderCourse(!headerCourse);
  };

  return (
    <>
      <BrowserRouter>
        {showVideo && <VideoPlay />}
        {!showVideo && (
          <>
            <Header scrollDownC={scrollDownC} sticky={true} />
            <Menubar headerCourse={headerCourse} />
            <Body headerCourse={headerCourse} />
            <Footer />
          </>
        )}
        <PlayArrowIcon handleClick={handleVideoToggle} showVideo={showVideo} />
      </BrowserRouter>
    </>
  );
}

export default App;




// import React, { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';

// import Header from './Component/NavBar/Header';
// import Menubar from './Component/Menubar/Menubar';
// import Footer from './Component/Footer/Footer';
// import Body from './Component/Body/Body';
// import VideoPlay from './Component/Body/VideoPlay/VideoPlay';
// import PlayArrowIcon from './Component/Body/PlayArrowicon/PlayArrowicon';

// function App() {
//   const [showVideo, setShowVideo] = useState(true);

//   const handleVideoToggle = () => {
//     setShowVideo(!showVideo);
//   };

//   const [showComponents, setShowComponents] = useState(false);

//   const handleComponentToggle = () => {
//     setShowComponents(!showComponents);
//   };

//   const [headerCourse, setHeaderCourse] = useState(false);

//   const scrollDownC = () => {
//     setHeaderCourse(!headerCourse);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         {showVideo && <VideoPlay />}
//         {!showVideo && showComponents &&  <Header scrollDownC={scrollDownC} sticky={true} />}
//         {!showVideo && showComponents && <Body headerCourse={headerCourse} />}
//         {!showVideo && showComponents && <Footer />}
        
//         {showVideo && (
//         <PlayArrowIcon
//           handleClick={handleVideoToggle}
//           showVideo={showVideo}
//         />
//       )}
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;







// import React, { useRef, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';

// // import Body from './Component/Body/Body';
// import Header from './Component/NavBar/Header';
// import Menubar from './Component/Menubar/Menubar';
// import Footer from './Component/Footer/Footer';
// import VideoPlay from './Component/Body/VideoPlay/VideoPlay';
// function App() {
//   const [headerCourse, setHeaderCourse] = useState(false);
//   const scrollDownC = () => {
//     setHeaderCourse(!headerCourse)
//   };
//   return (
//     <>
//       <BrowserRouter>
//         <VideoPlay />
//         <Header scrollDownC={scrollDownC} sticky={true} />
//         <Menubar headerCourse={headerCourse}/>
//         {/* <Body headerCourse={headerCourse} /> */}
//         <Footer />
//       </BrowserRouter>
//     </>
//   )
// }

// export default App