import React from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import logo2 from './logo2.png'
import icons from './icons.png'
import facbook from './facebook.png';
import twiter from './twiter.png';
import youtube from './youtube.png';
import instagarm from './imgbin_instagram-logo-icon-png.png';

function Footer() {

    const CustomContainer = styled(Container)(({ theme }) => ({
        // display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: theme.spacing(4),
        },
        backgroundColor: 'black'
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
        <Box sx={{ backgroundColor: 'black', color: 'white' }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sx={{ padding: '1rem', maxWidth: '160px', display: 'flex', justifyContent: 'center' }}>
                        <img width="60%" src={logo2} alt="Logo" />
                    </Grid>
                    <Grid item xs={12} md={3} sx={{
                        display: 'grid', padding: '1rem',
                        justifyContent: 'center',
                    }}>
                        <Box sx={{
                            display: 'flex', justifyContent: 'center', background: '#fff',
                            flexDirection: 'row', gap: '0.5rem', borderRadius: '13px',
                            padding: '10px',
                            width: '65 %',
                            marginBottom: '11px',
                        }}>
                            <a style={{
                                display: 'flex',  justifyContent: 'center',
                            }} href="https://www.facebook.com/vidhyoday?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">

                                <img width="70%" src={facbook} alt="Icons" />
                            </a>

                            <a style={{
                                display: 'flex',  justifyContent: 'center',
                            }} href="https://instagram.com/vidhyoday?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                                <img width="70%" src={instagarm} alt="Icons" />
                            </a>
                            <a style={{
                                display: 'flex',  justifyContent: 'center',
                            }} href="https://twitter.com/vidhyoday?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                                <img width="70%" src={twiter} alt="Icons" />
                            </a>
                            <a style={{
                                display: 'flex',  justifyContent: 'center',
                            }} href="https://youtube.com/@Vidhyoday" target="_blank" rel="noopener noreferrer">
                                <img width="70%" src={youtube} alt="Icons" />
                            </a>

                        </Box>
                        <Typography>
                            Gate No. 4, Auditchya Bhawan, behind High Court,
                            Indore, Madhya Pradesh 452001
                        </Typography>
                        <Typography>Connect us on : +91-8181815951</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'grid', padding: '1rem' }}>
                        <Typography>
                            Vidhyoday: Indore's Best Institute for Empowering Excellence in CA, CS, XI & XII, CET, IPM & CLAT. Our
                            professional academy nurtures competitive brilliance, fostering top-ranking students nationwide. Join
                            India's finest academy, where success thrives and dreams soar.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Typography 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#A69B9B',
                fontSize: '18px',
                lineHeight: '21px',
                paddingBottom: '0.5rem',
            }}>
                Copyright @Vidhyoday Education Private Limited
            </Typography>
        </Box >
    )
}

export default Footer