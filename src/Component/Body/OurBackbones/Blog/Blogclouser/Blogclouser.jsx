import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './blogclouser.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LeftArrow from '../../../../../assets/img/arrow/leftArreow.png';
import RightArrow from '../../../../../assets/img/arrow/rightArrow.png';

const Blogclouser = () => {
    const [employeeData, setEmployeeData] = useState([]);
    // console.log('empoloydataset', employeeData)
    const sliderRef = useRef(null);
    const instId = 1; // Replace with the actual instId

    useEffect(() => {
        async function fetchPublicBanner() {
            try {
                const response = await fetch(
                    `https://api.softkitesinfo.com/admin/employee/fetch-public-employee/${instId}`
                );

                if (response.ok) {
                    const data = await response.json();
                    // Process the data here
                    // console.log(data);

                    // Set the banner data to the state
                    setEmployeeData(data.employees);
                } else {
                    console.log('Error:', response.status);
                }
            } catch (error) {
                console.log('Request failed:', error);
            }
        }

        fetchPublicBanner();
    }, [instId]);

    // const navigate = useNavigate();


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
              slidesToShow: 2,
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

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                background: 'transparent',
                border: '1px solid transparent',
            }}
        >
            <Slider ref={sliderRef} {...settings}>
                {employeeData && employeeData.length > 0 ?
                    employeeData.map((data, index) => (

                        <div key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    padding: '1rem',
                                    width: {
                                        xs: '20vw',
                                        md: '20vw',
                                        // '@media (min-width: 860px)': {
                                        //     width: '40vw',
                                        // },
                                        '@media (max-width: 600px)': {
                                            width: '90%',
                                        },
                                    },
                                }}
                            >
                                <Card
                                    sx={{
                                        width: { xs: '18vw', md: '18vw' },
                                        maxWidth: 600,
                                        background: 'rgba(249, 249, 249, 1)',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        borderRadius: '20px',
                                        '@media (min-width: 1020px)': {
                                            width: '18vw',
                                        },
                                        // '@media (min-width: 860px)': {
                                        //     width: '45vw',
                                        // },
                                        '@media (max-width: 600px)': {
                                            width: '85vw',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex', justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <img
                                            src={`https://media.theoogway.com/${data.profile}`}
                                            style={{
                                                width: '74%',
                                                // width: '80%',
                                            }}
                                        />
                                    </Box>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'center',
                                        flexDirection: 'row', gap: '0.3rem',
                                         }}>
                                            <Typography
                                                sx={{
                                                     fontFamily: 'Mulish',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '23.2556px',
                                                    lineHeight: '24px',
                                                    color: '#000000',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {data.firstName}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                     fontFamily: 'Mulish',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '23.2556px',
                                                    lineHeight: '24px',
                                                    color: '#000000',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {data.lastName}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{
                                                 fontFamily: 'Mulish',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '20.8333px',
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                color: '#A69B9B',
                                            }}
                                        >
                                            {data.position}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>

                        </div>

                    ))
                    :
                    <p style={{textAlign:'center'}}>No employee data available</p>
                }

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
    );
};

export default Blogclouser;






{/* <Box
sx={{
    display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '1rem',
    width: { xs: '20vw', md: '20vw' },
    '@media (min-width: 860px)': {
        width: '40vw',
    },
    '@media (max-width: 600px)': {
        width: '90%',
    },
    // width:'20vw'
    // width: '100%',
}}>
<Card
    sx={{
        width: { xs: '18vw', md: '18vw' },
        maxWidth: 600,
        background: 'background: rgba(249, 249, 249, 1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        '@media (min-width: 1020px)': {
            width: '18vw',
        },
        '@media (min-width: 860px)': {
            width: '45vw',
        },
        '@media (max-width: 600px)': {
            width: '85vw',
        },
  
        // ':hover': {
        //     boxShadow: '8px 4px 30px #F8BB1A',
        // },
    }}
> */}



{/* Slide 1 */ }


// {/* Slide 2 */ }
// {/* <div>
//     <Box
//         sx={{
//             display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '1rem', width:'20vw',
//             //  width: '100%',
//         }}>
//         <Card
//             sx={{
//                 width:'18vw',
//                 maxWidth: 345,
//                 background: '#FFFFFF',
//                 boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//                 borderRadius: '20px',
//                 // ':hover': {
//                 //     boxShadow: '8px 4px 30px #F8BB1A',
//                 // },
//             }}
//         >
//             <Box
//                 sx={{
//                     display: 'flex', justifyContent: 'center',
//                     alignItems: 'center',
//                 }}>
//                 <img src={BlogSecond}
//                     style={{
//                         width: '74%',
//                         // width: '80%',
//                     }}
//                 />
//             </Box>


//             <CardContent>
//                 <Typography
//                     sx={{
//                          fontFamily: 'Mulish',
//                         fontStyle: 'normal',
//                         fontWeight: '500',
//                         fontSize: '27.2556px',
//                         lineHeight: "30px",
//                         color: '#000000',
//                         textAlign: 'center',
//                         // marginBottom: '1rem'
//                     }}
//                 >
//                     Varun Sharma
//                 </Typography>
//                 <Typography
//                     sx={{
//                          fontFamily: 'Mulish',
//                         fontStyle: 'normal',
//                         fontWeight: '400',
//                         fontSize: '20.8333px',
//                         lineHeight: '24px',
//                         textAlign: 'center',
//                         color: '#A69B9B',
//                     }}>
//                     CA Teacher
//                 </Typography>
//             </CardContent>

//         </Card>
//     </Box>
// </div>

// {/* Slide 3 */}
//     < div >
//     <Box
//         sx={{
//             display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '1rem', width: '20vw',
//             // width: '100%',

//         }}>
//         <Card
//             sx={{
//                 width: '18vw',
//                 maxWidth: 345,
//                 background: '#FFFFFF',
//                 boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//                 borderRadius: '20px',
//                 // ':hover': {
//                 //     boxShadow: '8px 4px 30px #F8BB1A',
//                 // },
//             }}
//         >
//             <Box
//                 sx={{
//                     display: 'flex', justifyContent: 'center',
//                     alignItems: 'center',
//                 }}>
//                 <img src={BlogThird}
//                     style={{
//                         width: '71%',
//                         // width: '80%',
//                     }}
//                 />
//             </Box>

//             <CardContent>
//                 <Typography
//                     sx={{
//                          fontFamily: 'Mulish',
//                         fontStyle: 'normal',
//                         fontWeight: '500',
//                         fontSize: '27.2556px',
//                         lineHeight: "30px",
//                         color: '#000000',
//                         textAlign: 'center',
//                         // marginBottom: '1rem'
//                     }}
//                 >
//                     Varun Sharma
//                 </Typography>
//                 <Typography
//                     sx={{
//                          fontFamily: 'Mulish',
//                         fontStyle: 'normal',
//                         fontWeight: '400',
//                         fontSize: '20.8333px',
//                         lineHeight: '24px',
//                         textAlign: 'center',
//                         color: '#A69B9B',
//                     }}>
//                     CA Teacher
//                 </Typography>
//             </CardContent>
//         </Card>
//     </Box>
// </>

// {/* Slide 4 */ }
// <div>
// <Box
// sx={{
// display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '1rem', width: '20vw',
// // width: '100%',

// }}>
// <Card
// sx={{
//     width: '18vw',
//     maxWidth: 345,
//     background: '#FFFFFF',
//     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//     borderRadius: '20px',
//     // ':hover': {
//     //     boxShadow: '8px 4px 30px #F8BB1A',
//     // },
// }}
// >

// <Box
//     sx={{
//         display: 'flex', justifyContent: 'center',
//         alignItems: 'center',
//     }}>
//     <img src={BlogForth}
//         style={{
//             width: '67%',
//             // width: '80%',
//         }}
//     />
// </Box>
// <CardContent>
//     <Typography
//         sx={{
//              fontFamily: 'Mulish',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             fontSize: '27.2556px',
//             lineHeight: "30px",
//             color: '#000000',
//             textAlign: 'center',
//             // marginBottom: '1rem'
//         }}
//     >
//         Varun Sharma
//     </Typography>
//     <Typography
//         sx={{
//              fontFamily: 'Mulish',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: '20.8333px',
//             lineHeight: '24px',
//             textAlign: 'center',
//             color: '#A69B9B',
//         }}>
//         CA Teacher
//     </Typography>
// </CardContent>

// </Card>
// </Box>
// </div> * /}