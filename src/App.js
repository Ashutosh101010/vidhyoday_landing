import React, {useRef, useState } from 'react';
import { BrowserRouter  } from 'react-router-dom';

import Body from './Component/Body/Body';
import Header from './Component/NavBar/Header';
import Footer from './Component/Footer/Footer';
import VideoPlay from './Component/Body/VideoPlay/VideoPlay';
function App() {
  const [headerCourse, setHeaderCourse] = useState(false);
  const scrollDownC = () => {
    setHeaderCourse(!headerCourse)
  };
  return (
    <>
     <BrowserRouter> 
     <VideoPlay/> 
    <Header scrollDownC={scrollDownC} sticky={true}/>
    <Body  headerCourse={headerCourse} />
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App