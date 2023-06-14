import React, { useRef } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Woman1 from '../../../assets/img/banner/Group 70kggj (2).png';
import Vector from '../../../assets/img/banner/Vector.png';
import Group from '../../../assets/img/banner/Group 21.png';
import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import { useMediaQuery } from '@material-ui/core';



const Banner = ({ ScrollDown, CoursescrollDown }) => {
    // const OurBackbones = useRef(null);
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        fontFamily: 'Mulish',
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));

    return (
        <Box sx={{
            // background: 'linear-gradient(89deg, #8B45F6 0%, #8946F5 49.39%, #D07D71 98.71%)',
            minHeight: "100vh", paddingTop: '9rem',
            '@media (max-width: 768px)': {
                paddingTop: '9rem',
                // marginTop: '-5rem',
            },
        }}>
            <Container>
                {/* <Navber /> */}
                <CustomBox>
                    <Box sx={{ flex: "1.25", mt: "-25px", padding: '1rem' }}>
                        <Box>
                            <Title
                                sx={{
                                    fontSize: { xs: '3.5rem', md: '74', sm: '40px' },
                                    color: 'rgba(0, 0, 0, 1)',
                                    fontStyle: 'normal',
                                    lineHeight: { xs: '60px', sm: '1.3' },
                                    fontWeight: '400',
                                    fontFamily: 'Mulish',
                                }}
                            >
                                Take your <span style={{ color: 'rgba(1, 177, 201, 1)' }}>
                                    Learning</span> to the next level with <span style={{ color: 'rgba(1, 177, 201, 1)' }}>Vidhyoday</span> </Title>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#000000",
                                    my: 4,
                                    fontFamily: 'Mulish',
                                    fontStyle: 'normal',
                                    fontWeight: '300',
                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                    lineHeight: { xs: '1rem', sm: '1.2rem' },
                                }}
                            >
                                Unleash your potential with our cutting-edge coaching methods for <b style={{}}>CA, CS, and more.</b>
                                And here's the <span style={{ color: 'rgba(255, 0, 0, 1)' }}>cherry on top</span>: if you don't clear your exam, we'll not only refund your fee
                                But also provide a personalized plan to ensure your triumphant comeback.
                                Experience a whole new level of innovation and achievement at Vidhyoday!
                            </Typography>

                            <Button
                                sx={{
                                    textTransform: 'none',
                                    fontFamily: 'Mulish',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: { xs: '23px', md: '23px', sm: '18px' },
                                    textAlign: 'center',
                                    lineHeight: { xs: '27px', md: '27px', sm: '18px' },
                                    color: '#000000',
                                    background: '#FFFFFF',
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '7px',
                                    border: '2px solid #F2B632;',
                                    padding: '12px',
                                    marginBottom: '1rem',
                                    width: '40%', // Default width for large screens
                                    height: '63px',
                                    '@media (max-width: 600px)': {
                                        width: '72%', // Adjusted width for small screens (width <= 600px)
                                        fontSize: '18px',
                                        marginLeft: 0,
                                    },
                                    '@media (min-width: 601px) and (max-width: 900px)': {
                                        width: '47%', // Adjusted width for medium screens (600px < width <= 900px)
                                        fontSize: '33px',
                                        marginLeft: 0,
                                    },
                                }}
                            >
                                Explore More <img src={Vector} style={{ marginLeft: '1rem', }} />
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                marginTop: '3.5rem',
                                display: 'flex',
                                justifyContent: { xs: 'space-around', md: 'center' },
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'center',
                                gap: { xs: '1rem', md: '2rem' },
                                '@media (max-width: 600px)': {
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    textAlign: 'center',
                                },
                                '@media (min-width: 600px) and (max-width: 1024px)': {
                                    gap: '2rem',
                                },
                            }}

                        >
                            <img src={Group} style={{ height: '20%' }} />

                            <Box
                                sx={{
                                    border: '0.785714px solid #F2B632',
                                    borderRadius: '7.07143px',
                                    position: 'relative',
                                    left: { xs: '0rem', sm: '-4rem', md: '9rem' },
                                }}
                            >
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        fontFamily: 'Mulish',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: { xs: '19.6429px', md: '19.6429px' },
                                        textAlign: 'center',
                                        lineHeight: { xs: '23px', md: '23px' },
                                        color: '#000000',
                                        background: '#FFFFFF',
                                        boxShadow: '0px 3.14286px 3.14286px rgba(0, 0, 0, 0.25)',
                                        borderRadius: '7px',
                                        border: '2px solid #FFFFFF',
                                        padding: '12px',
                                        marginTop: '2px',
                                        marginLeft: '2px',
                                        width: { xs: '100%', md: '100%' },
                                        height: '63px',
                                        '@media (max-width: 768px)': {
                                            width: '100%',
                                            marginLeft: 0,
                                        },
                                    }}
                                    onClick={CoursescrollDown}
                                >
                                    Find the best course
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    {isMobileScreen ? null : (
                        <Box sx={{ flex: "1", padding: '1rem' }}>
                            <Box
                                sx={{
                                    width: '45%',
                                    border: '1px solid #3C70AC',
                                    borderRadius: '7.07143px',
                                    float: 'right',
                                    /* margin-top: 3rem; */
                                    position: 'relative',
                                    top: '6rem',
                                    left: '1rem',
                                }}>
                                <Button onClick={ScrollDown}
                                    sx={{
                                        textTransform: 'none',
                                        fontFamily: 'Mulish',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: { xs: '25px', md: '22px' },
                                        textAlign: 'center',
                                        lineHeight: { xs: '29px', md: '23px' },
                                        color: '#000000',
                                        background: '#FFFFFF',
                                        boxShadow: '0px 3.14286px 3.14286px rgba(0, 0, 0, 0.25)',
                                        borderRadius: '7px',
                                        border: '2px solid #FFFFFF;',
                                        padding: '12px',
                                        marginTop: '2px',
                                        marginLeft: '2px',
                                        // marginBottom: '1rem',
                                        width: { xs: '100%', md: '100%' },
                                        height: '63px',
                                        // ':hover': {
                                        //     background: 'rgb(81 47 133 / 71%)',
                                        // },
                                        '@media (max-width: 768px)': {
                                            width: '100%',
                                            marginLeft: 0,
                                        },
                                    }}
                                >
                                    Top Teachers
                                </Button>
                            </Box>
                            <img
                                src={Woman1}
                                alt="Woman1Img"
                                style={{
                                    maxWidth: "100%",
                                    marginBottom: "2rem",
                                    width: '100%',
                                    marginTop: '0rem', // Default marginTop for mobile screens

                                    '@media (min-width: 768px)': { // Tablet screens
                                        marginTop: '-4rem',
                                    },
                                    '@media (min-width: 1024px)': { // Desktop screens
                                        marginTop: '-6rem',
                                    },
                                }}
                            />
                        </Box>
                    )}
                </CustomBox>
            </Container>
        </Box >
    )
}

export default Banner;

