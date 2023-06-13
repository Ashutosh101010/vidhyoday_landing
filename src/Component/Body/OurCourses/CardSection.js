import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import image1 from './Rectangle31.png';
import './CardSection.css';
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import LeftArrow from './arrow/leftArreow.png';
import RightArrow from './arrow/rightArrow.png';
import { useMediaQuery } from '@material-ui/core';


function CardSection({courseSection}) {
    const [courseData, setCourseData] = useState([]);
    const sliderRef = useRef(null);
    const instId = 1;
    const isMobileScreen = useMediaQuery('(max-width: 960px)');

   

    useEffect(() => {
        async function fetchPublicBanner() {
            try {
                const response = await fetch(
                    `https://api.softkitesinfo.com/admin/course/fetch-public/${instId}`
                );

                if (response.ok) {
                    const data = await response.json();
                    // Process the data here
                    // console.log('course',data);

                    // Set the banner data to the state
                    setCourseData(data.courses);
                } else {
                    // console.log('Error:', response.status);
                }
            } catch (error) {
                // console.log('Request failed:', error);
            }
        }

        fetchPublicBanner();
    }, [instId]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    useEffect(() => {
        const handleResize = () => {
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(0);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const buttonContainerStyle = {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '1rem',
    };

    const CustomContainer = styled(Container)(({ theme }) => ({
        // display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: theme.spacing(4),
        },
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        // display: "flex",
        // justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            // flexDirection: "column",
            alignItems: "center",
            // textAlign: "center",
        },
    }));

    return (
        <CustomContainer ref={courseSection}>
         {!isMobileScreen && (
            <CustomBox>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex', flexDirection: 'column', gap: '3rem'
                    }}>
                    <Typography 
                    sx={{
                         fontFamily: 'Mulish',
                        fontSize: '45px',
                        fontWeight: '600',
                        lineHeight: '53px',
                        letterSpacing: '0em',
                        textAlign: 'center',
                        color: '#20BBD0',

                    }}>
                        Our Courses
                    </Typography>

                    <Typography 
                    sx={{
                         fontFamily: 'Mulish',
                        fontWeight: '400',
                        fontSize:'1.5rem',
                        size: '20px',
                        lineHeight: "23px",
                        textAlign:'center',
                        alignItems: 'center',
                    }}>
                        "Experience the Magnetic Charm of Our Courses and Ignite Your Journey to a Bright Future!"
                    </Typography>
                </Box>
                {/* <Box sx={{
                    width: '100%',
                    height: '33px',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    // display: 'flex', flexDirection: 'column', gap: '3rem'
                }}>
                   
                </Box> */}
                <Box
                 sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Grid container spacing={4} 
                    sx={{ width: '100%', marginTop: '3rem', 
                     justifyContent: 'center', alignItems: 'center',  display: 'flex', flexDirection: 'row', gap: '2rem'
                     }}>
                        {courseData.map((data, index) => (
                            <Box key={index} sx={{ width: '100%', maxWidth: '255px', marginBottom: '8px' }}>
                                <Card sx={{ borderRadius: '20px' }}>
                                    <CardMedia
                                        sx={{
                                            height: 140,
                                            width: '100%',
                                            borderRadius: '12px',
                                            backgroundColor: 'aqua',
                                        }}
                                        image={`https://media.theoogway.com/${data.logo}`}
                                        title="green iguana"
                                    />
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{
                                                fontSize: '19.5px',
                                                lineHeight: '23.6px',
                                                fontFamily: 'Inter',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {data.title}
                                        </Typography>
                                        <Button
                                            sx={{
                                                color: '#8C8C8C',
                                                border: '1px solid',
                                                fontSize: '10.5px',
                                                lineHeight: '10.6px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: '10px',
                                            }}
                                        >
                                            Learn more
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </CustomBox>
            )}

            {isMobileScreen && (
            <CustomBox>
            <div
            style={{
                position: 'relative',
                width: '100%',
                background: 'transparent',
                border: '1px solid transparent',
            }}
        >
            <Slider ref={sliderRef} {...settings}>
            {courseData.map((data, index) => (
                            <Box key={index} sx={{ width: '100%', maxWidth: '255px', marginBottom: '8px' }}>
                                <Card sx={{ borderRadius: '20px' }}>
                                    <CardMedia
                                        sx={{
                                            height: 140,
                                            width: '100%',
                                            borderRadius: '12px',
                                            backgroundColor: 'aqua',
                                        }}
                                        image={`https://media.theoogway.com/${data.logo}`}
                                        title="green iguana"
                                    />
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{
                                                fontSize: '19.5px',
                                                lineHeight: '23.6px',
                                                fontFamily: 'Inter',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {data.title}
                                        </Typography>
                                        <Button
                                            sx={{
                                                color: '#8C8C8C',
                                                border: '1px solid',
                                                fontSize: '10.5px',
                                                lineHeight: '10.6px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: '10px',
                                            }}
                                        >
                                            Learn more
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}

            </Slider>
            <div style={buttonContainerStyle}>
                <button
                    className="slick-arrow slick-prev"
                    onClick={() => sliderRef.current.slickPrev()}
                >
                    <img
                        src={LeftArrow}
                        alt="left"
                        style={{
                            overflow: 'hidden',
                            width: '3vw',
                            marginTop: '3rem',
                            marginLeft: '-1rem',
                        }}
                    />
                </button>
                <button
                    className="slick-arrow slick-next"
                    onClick={() => sliderRef.current.slickNext()}
                >
                    <img
                        src={RightArrow}
                        alt="right"
                        style={{ overflow: 'hidden', width: '3vw', marginTop: '3rem' }}
                    />
                </button>
            </div>
        </div>
            </CustomBox>
            )}
        </CustomContainer >
    )
}

export default CardSection