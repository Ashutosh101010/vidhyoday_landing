import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import Blogclouser from './Blogclouser/Blogclouser';
import BlogBanner from './img/img/blogbanner.png';


const useStyles = makeStyles({
    
    customTypography: {
         fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '1.2rem',
        lineHeight: '26px',
        textAlign: 'center',
        color: '#000000',
        marginBottom: '3rem'
    },
});

const OurBackbones = ({aboutSection}) => {
    
    const classes = useStyles();

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

        <CustomContainer ref={aboutSection} >
        <CustomBox>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '0rem', marginBottom: '4rem' }}>
                        <Typography
                        style={{
                                 fontFamily: 'Mulish',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '2.1rem',
                                lineHeight: '2rem',
                                textAlign: 'center',
                                color: '#20BBD0',
                            }}
                        >
                            Our Backbones
                        </Typography>
                    </Box>
                    <Box sx={{marginBottom: '4rem'}}>
                        <Typography className={classes.customTypography}>
                            Our faculty make us what we are. A bunch of extraordinary guides, mentors, and leaders who will not only take you closer to your goal, but also remove the hurdles from your road, making your challenges easy.
                            Meet our true blue winner-makers who have consistently helped thousands of students get All India Ranks in professional exams, including CA-1 and CS-1.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', background:' radial-gradient(9.59% 53.59% at 50% 50%, rgba(165, 157, 255, 0.624) -10%, rgba(254, 157, 250, 0) 83.33%)' }}
                    >
                        <Blogclouser />
                    </Box>
                    </CustomBox> 
        </CustomContainer >
    )
}

export default OurBackbones;
