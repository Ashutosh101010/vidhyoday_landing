import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from '../Body/Body';
// import About from '../About/About';
// import BlogContent from '../About/Blog/Blogclouser/BlogContent/BlogContent';
// import Blog from '../About/Blog/BLog';
// import CareeratClassio from '../About/CareeratClassio/CareeratClassio';
// import Form from '../Form/Form';


const Menubar = ({ headerCourse }) => {
    return (
        <div>
            {/* <BrowserRouter> */}
                <Routes>
                    {/* <div> */}
                        <Route path="/Home" element={<Body headerCourse={headerCourse}/>} />
                </Routes>
            {/* </BrowserRouter > */}
        </div >
    )
}

export default Menubar;
