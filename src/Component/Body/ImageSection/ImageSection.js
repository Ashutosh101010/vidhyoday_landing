import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
// import Image from '@mui/material/Image';
import section1 from './imagesection1.png';
import section2 from './imageSection2.png';
import section3 from './imageSection3.png';
import section4 from './imageSection4.png';
import Line from './Line 5.png';

function ImageSection() {
    const isMobileView = window.innerWidth < 820;
   

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
        <Box
            sx={{
                background: 'linear-gradient(360deg, rgba(242, 255, 254, 0.8) 4.35%, rgba(242, 255, 254, 0) 193.47%)',
            }}
        >

            <CustomContainer >
                <CustomBox>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={7}>
                            <Box sx={{ width: '100%', display: 'flex', gap: '4rem' }}>
                                <Box position="relative">
                                    <Box display="flex" position="absolute">
                                        {/* {isMobileView && (
                                            <Box position="relative" top="50px">
                                                <img src={section2} style={{ width: '100%' }} alt="Section 2" />
                                            </Box>
                                        )} */}
                                        <Box position="relative">
                                            <Box display="flex" position="absolute">
                                                {/* {isMobileView && ( */}
                                                <Box position="relative" top="50px">
                                                    <img src={section2} style={{ width: '100%' }} alt="Section 2" />
                                                </Box>
                                                {/* )} */}
                                                <Box position="relative" right={isMobileView ? '0' : '52px'}>
                                                    <img src={section1} style={{ width: '100%' }} alt="Section 1" />
                                                </Box>
                                            </Box>
                                            {/* {!isMobileView && ( */}
                                                <Box display="flex">
                                                    <Box position="relative" top="211px" left="36px" zIndex="4">
                                                        <img src={section3} style={{ width: '100%' }} alt="Section 3" />
                                                    </Box>
                                                    <Box position="relative" top="136px" right={isMobileView ? '0' : '28px'}>
                                                        <img src={section4} style={{ width: '100%' }} alt="Section 4" />
                                                    </Box>
                                                </Box>
                                            {/* )} */}
                                        </Box>
                                    </Box>
                                    {/* {!isMobileView && ( */}
                                        <Box display="flex">
                                            <Box position="relative" top="211px" left="36px" zIndex="4">
                                                <img src={section3} style={{ width: '100%' }} alt="Section 3" />
                                            </Box>
                                            <Box position="relative" top="136px" right={isMobileView ? '0' : '28px'}>
                                                <img src={section4} style={{ width: '100%' }} alt="Section 4" />
                                            </Box>
                                        </Box>
                                    {/* )} */}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '3rem',
                                    '@media (max-width: 600px)': {
                                        marginTop: '16rem',
                                    },
                                    '@media (min-width: 601px)': {
                                        marginTop: '0rem',
                                    },
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Mulish',
                                            color: '#01B1C9',
                                            fontSize: '45px',
                                            alignItems: 'center',
                                            lineHeight: '53px',
                                        }}
                                    >
                                        Premises
                                    </Typography>
                                    <img src={Line} style={{ width: '30%' }} alt="line" />
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: '21px',
                                            textAlign: 'justify',
                                            lineHeight: '25px',
                                            marginBottom: '25px',
                                            fontFamily: 'Mulish',
                                        }}
                                    >
                                        Welcome to our sprawling{' '}
                                        <span style={{ color: 'red' }}>20,000 sq. ft.</span> campus in the heart of Indore. A{' '}
                                        <span style={{ color: 'red' }}>technologically equipped</span> and future-ready breeding ground for the
                                        sharpest accounting minds of tomorrow.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '21px',
                                            textAlign: 'justify',
                                            lineHeight: '25px',
                                            fontFamily: 'Mulish',
                                        }}
                                    >
                                        Want to come see it for yourself? We are always willing to go around and have some coffee.
                                    </Typography>
                                </Box>
                                <Box
                                    // item
                                    // xs={12}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: isMobileView ? 'center' : 'flex-stat',
                                        marginTop: '1rem',
                                        // marginRight: '50px',
                                        gap:'1.5rem',
                                        marginBottom: isMobileView ? '0rem' : '4rem'
                                    }}
                                >
                                    <Typography sx={{ lineHeight: '34px' }}>Unveil the Beauty of Our Institute:</Typography>
                                    <Button
                                        sx={{
                                            background: '#01B1C9',
                                            borderRadius: '15px',
                                            color: 'white',
                                        }}
                                    >
                                        View All Pictures Now!
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        {/* <Grid
                            item
                            xs={12}
                            sx={{
                                gap: '1rem',
                                display: 'flex',
                                justifyContent: isMobileView ? 'center' : 'flex-end',
                                marginTop: isMobileView ? '0rem' : '6rem',
                                marginRight: isMobileView ? '0px' : '50px',
                                position: isMobileView ? 'none' : 'relative',
                                right: isMobileView ? '0rem' : '7rem',
                                bottom: isMobileView ? '0rem' : '2rem',
                                '@media (max-width: 899.95px)': {
                                    justifyContent: 'center',
                                    marginTop: '0rem',
                                    marginRight: '0px',
                                    position: 'none',
                                    right: '-10rem',
                                    bottom: '0rem',
                                },
                                '@media (max-width: 600px)': {
                                    justifyContent: 'center',
                                    marginTop: '0rem',
                                    marginRight: '0px',
                                    position: 'none',
                                    right: '0rem',
                                    bottom: '0rem',
                                },
                            }}
                        >
                            <Typography sx={{ 
                                fontSize: '1.2rem',
                                lineHeight: '34px',  fontFamily: 'Mulish', }}>Unveil the Beauty of Our Institute:</Typography>
                            <Button
                                sx={{
                                    background: '#01B1C9',
                                    borderRadius: '15px',
                                    color: 'white',
                                    fontFamily: 'Mulish',
                                    fontSize: '1rem',
                                }}
                            >
                                View All Pictures Now!
                            </Button>
                        </Grid> */}
                    </Grid>
                </CustomBox>
            </CustomContainer>
        </Box>
    )
}

export default ImageSection