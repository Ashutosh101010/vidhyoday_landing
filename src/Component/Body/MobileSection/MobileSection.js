import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
// import phoneImg from './Group86sfd.png';
import boyImf from './Group.png';
import mobile from './Group 89dd.png'
import googlePlay from './pinpng.com-google-play-logo-png-488251.png';
import appStore from './appstore.png';
import appSytem from './Component 1.png';
// import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

function MobileSection() {
    // const theme = useTheme();
    const isTabletScreen = useMediaQuery('(max-width: 960px)'); // Adjust the breakpoint value for tablet screens
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    const CustomContainer = styled(Container)(({ theme }) => ({
        // display: "flex",
        justifyContent: "space-between",
        marginTop: '60px',
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
        <CustomContainer>
            <CustomBox>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginBottom: isMobileScreen ? '2rem' : '2rem',
                    }}>
                    <Grid container
                        sx={{
                            // backgroundImage: `url(${backgroundImage})`,
                            // backgroundSize: 'cover',
                            // backgroundPosition: 'center',
                        }}
                    >
                        <Grid item xs={12} md={6}
                            sx={{
                                background: 'radial-gradient(125.59% 52.59% at 91% 65%, rgba(241, 255, 157, 0.624) 0%, rgba(254, 157, 250, 0) 83.33%)'
                            }}>
                            <img
                                style={{
                                    width: '100%',
                                    marginTop: ['30px', '85px'],
                                    marginLeft: ['10px', '70px'],
                                    maxWidth: '100%',
                                    height: 'auto',
                                    overflow: 'hidden'
                                }}
                                src={mobile}
                            />
                            {/* <img
                                style={{
                                    width: '100%',
                                    marginTop: ['30px', '85px'],
                                    marginLeft: ['10px', '70px'],
                                    maxWidth: '100%',
                                    height: 'auto',
                                    overflow: 'hidden'
                                }}
                                src={boyImf}
                            /> */}
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                            <Box sx={{ width: '100%', float: 'right' }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Mulish',
                                        fontSize: ['35px', '45px', '47px'],
                                        fontWeight: 'bold',
                                        marginBottom: '28px',
                                        lineHeight: ['42px', '48px', '54px'],
                                    }}
                                >
                                    Supercharge Your Learning
                                </Typography>
                                <Typography
                                    sx={{ fontFamily: 'Mulish', fontSize: '20px', lineHeight: '24px' }}
                                >
                                    Download our app now and gain instant access to exclusive study materials, personalized notifications, and real-time progress tracking. Take control of your educational journey and unlock a world of convenience and success in just a few taps. Don't miss out, download now!
                                </Typography>
                                <Box
                                    sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '1rem', overflow: 'hidden' }}
                                >
                                    <Grid
                                        sx={{
                                            display: 'flex',
                                            flexDirection: isMobileScreen ? 'column' : 'row',
                                            gap: '3rem',
                                        }}
                                    >
                                        <Grid
                                            container
                                            sx={{
                                                flexDirection: isMobileScreen ? 'row' : 'column',
                                                gap: '1rem',
                                                justifyContent: 'center',
                                                padding: '1rem',
                                                flexWrap: isMobileScreen ? 'wrap' : 'nowrap',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    flex: isMobileScreen ? '0 0 33%' : 'auto',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    display: 'flex',
                                                    borderRadius: '10px',
                                                    color: 'white',
                                                    fontFamily: 'Mulish',
                                                }}
                                            >
                                                <img
                                                    src={appSytem} // Replace with the actual source of your image
                                                    style={{
                                                        maxWidth: isMobileScreen ? '100%' : '18vw',
                                                        maxHeight: '18vh',
                                                        objectFit: 'contain',
                                                        borderRadius: '10px',
                                                    }}
                                                    alt="Google Play"
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    flex: isMobileScreen ? '0 0 33%' : 'auto',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    display: 'flex',
                                                    borderRadius: '10px',
                                                    color: 'white',
                                                    fontFamily: 'Mulish',
                                                }}
                                            >
                                                <img
                                                    src={googlePlay} // Replace with the actual source of your image
                                                    style={{
                                                        maxWidth: isMobileScreen ? '100%' : '18vw',
                                                        maxHeight: '18vh',
                                                        objectFit: 'contain',
                                                        borderRadius: '10px',
                                                    }}
                                                    alt="Google Play"
                                                />
                                            </Box>

                                            <Box
                                                sx={{
                                                    flex: isMobileScreen ? '0 0 33%' : 'auto',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    display: 'flex',
                                                    borderRadius: '10px',
                                                    color: 'white',
                                                    fontFamily: 'Mulish',
                                                }}
                                            >
                                                <img
                                                    src={appStore} // Replace with the actual source of your image
                                                    style={{
                                                        maxWidth: isMobileScreen ? '100%' : '18vw',
                                                        maxHeight: '18vh',
                                                        objectFit: 'contain',
                                                        borderRadius: '10px',
                                                    }}
                                                    alt="app Store"
                                                />
                                            </Box>
                                            {/* <Box
                                                sx={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    display: 'flex',
                                                    width: ' 61%',
                                                    gap: ' 18px',
                                                    background: 'black',
                                                    borderRadius: ' 10px',
                                                    color: 'white',
                                                    padding: '0.6rem',
                                                    fontSize: ' 25px',
                                                    lineHeight: ' 30px',
                                                    fontFamily: 'Mulish',
                                                }}>
                                                <Box>
                                                    <img src={appSystem} />
                                                </Box>
                                                <Box >
                                                    Download our System App
                                                </Box>
                                            </Box> */}

                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid >

                </Box >
            </CustomBox >
        </CustomContainer >
    )
}

export default MobileSection