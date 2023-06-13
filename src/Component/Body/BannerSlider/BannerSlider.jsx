import React from 'react';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import { Carousel } from '3d-react-carousal';

function BannerSlider({ slides, dotComponent: DotIndicators, activeColor }) {
  const CustomContainer = styled(Container)(({ theme }) => ({
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    position: "relative",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  }));


  return (
    <Box sx={{ marginTop: '9rem', marginBottom: '5rem' }}>
      <CustomContainer>
        <CustomBox>
        <Carousel slides={slides} autoplay={true}  arrows={true} interval={3000}/>
          {/* <Carousel
            slides={slides}
            autoplay={true}
            arrows={true}
            interval={3000}
            
          /> */}
         
        </CustomBox>
      </CustomContainer>
    </Box>
  );
}

export default BannerSlider;
