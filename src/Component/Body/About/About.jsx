import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import Aboutimg from '../../../assets/img/About/image 1.png';
import { Grid, Typography } from '@mui/material';
import Vector from '../../../assets/img/About/Vector (1).png';
import VideoPlay from '../VideoPlay/VideoPlay';
const About = () => {
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
        <Box sx={{ marginTop: '1rem' }}>
            <CustomContainer>
                <CustomBox>
                    <Box sx={{ background: '#FFFAEF', padding: '2.5rem' }}>
                        <Grid container spacing={2}>
                            {/* Column 1 */}
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <VideoPlay/>
                                    {/* <iframe width="100%" height="300" src="https://www.youtube.com/embed/w029CLcRhBE?autoplay=1"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    ></iframe> */}
                                    {/* <img src={Aboutimg} alt="About Image" style={{ width: '95%' }} /> */}
                                </Box>
                            </Grid>

                            {/* Column 2 */}
                            <Grid item xs={12} md={6}>
                                <Box sx={{ padding: '1rem', }}>
                                    <Typography
                                        sx={{
                                             fontFamily: 'Mulish',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: { xs: '30px', md: '45px' },
                                            lineHeight: { xs: '35px', md: '53px' },
                                            color: '#000000',
                                        }}
                                    >
                                        WHAT PEOPLE SAY ABOUT <span style={{ color: 'rgba(242, 182, 50, 1)' }}>Vidhyoday</span>
                                    </Typography>
                                    <Typography
                                        sx={{
                                             fontFamily: 'Mulish',
                                            fontStyle: 'normal',
                                            fontWeight: '300',
                                            fontSize: '15px',
                                            lineHeight: '18px',
                                            textAlign: 'justify',
                                            color: '#000000',
                                            marginTop: '1rem',
                                        }}
                                    >
                                        Experience the power of success stories firsthand through our video testimonials. Our students and their achievements speak volumes about the excellence we deliver. Vidhyoday's unwavering commitment to quality education, personalized guidance, and top-notch faculty sets us apart. Join us and witness the transformative impact that makes Vidhyoday the ultimate destination for aspiring professionals.
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: '100%',
                                        background: '#3C70AC',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        paddingLeft: '0.5rem',
                                        paddingBottom: '0.5rem',
                                        position: 'relative',
                                        '@media (max-width: 1024px)': {
                                            right: 0,
                                            top: 0,
                                        },
                                        '@media (min-width: 1025px)': {
                                            right: '10rem',
                                            top: '1rem',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            padding: '2rem',
                                            background: '#FFFFFF',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                 fontFamily: 'Mulish',
                                                fontStyle: 'normal',
                                                fontWeight: '300',
                                                fontSize: '15px',
                                                lineHeight: '18px',
                                                textAlign: 'justify',
                                                color: '#000000',
                                            }}
                                        >
                                            "Vidhyoday is a game-changer! With personalized guidance, exceptional faculty, and comprehensive study materials, I achieved my dream of securing an All India Rank in the CA exam. It truly is the best institute out there. Forever grateful!"
                                        </Typography>
                                        <Typography
                                            style={{
                                                 fontFamily: 'Mulish',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: '12px',
                                                lineHeight: '14px',
                                                color: '#000000',
                                                textAlign: 'end',
                                            }}
                                        >
                                            Rohit Singh
                                        </Typography>
                                        <Box sx={{ float: 'right', marginTop: '4px', }}>
                                            <img src={Vector} alt='1'></img>
                                            <img src={Vector} alt='2'></img>
                                            <img src={Vector} alt='3'></img>
                                            <img src={Vector} alt='4'></img>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </CustomBox>
            </CustomContainer >

        </Box >
    )
}

export default About;
