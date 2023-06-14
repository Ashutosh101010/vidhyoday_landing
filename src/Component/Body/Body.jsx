import React, { useEffect, useRef } from 'react';
import OurBackbones from './OurBackbones/Blog/OurBackbones';
import Box from '@mui/material/Box';
import Banner from './Banner/Banner';
import Slider from './BannerSlider/slider';
import About from './About/About';
import MobileSection from './MobileSection/MobileSection';
import CardSection from './OurCourses/CardSection';
import ImageSection from './ImageSection/ImageSection';
import WhatsAppIcon from './whatsappIcon/WhatsAppIcon';


const Body = ({ headerCourse }) => {
    // const [showComponnet, setComponnet ] =([])
    const aboutSection = useRef(null);
    const courseSection = useRef(null);

    const ScrollDown = () => {
        window.scrollTo({
            top: aboutSection?.current?.offsetTop,
            behavior: 'smooth',
        });
    };
    const CoursescrollDown = () => {
        window.scrollTo({
            top: courseSection.current.offsetTop,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        if (headerCourse) {
            console.log('headerCourse', headerCourse);
            CoursescrollDown();
        }
    }, [headerCourse])

    return (
        <div
            style={{
                display: 'flex', flexDirection: 'column', gap: '3rem'   
            }}>
            <Box
                sx={{
                    marginTop: '-11rem',
                    background: 'radial-gradient(25.59% 38.59% at -1% 5%, rgba(92, 255, 235, 0.6) -2%, rgba(255, 213, 253, 0) 80.33%)',
                }}>
                <Box
                    sx={{
                        background: 'radial-gradient(17.59% 31.59% at 99% 47%, rgba(252, 216, 4, 0.75) 0%, rgba(254, 157, 250, 0) 83.33%)',
                    }}>
                    <Banner ScrollDown={ScrollDown} CoursescrollDown={CoursescrollDown} />
                </Box>
            </Box>
            <OurBackbones aboutSection={aboutSection} />
            <Slider />
            <ImageSection />
            <About />
            {/* <NewsTrigger
              style={{
                '@media (max-width: 880px)': {
                  display: 'none',
                },
              }}
            /> */}
            <CardSection courseSection={courseSection} />
            <MobileSection />
            {/* <PlayArrowicon /> */}
            <WhatsAppIcon />
        </div>
    )
}

export default Body;
