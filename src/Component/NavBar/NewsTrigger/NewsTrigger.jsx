import { Typography } from '@mui/material';
import React from 'react';
import Marquee from 'react-fast-marquee';

const NewsTrigger = () => {
  return (
    <Marquee style={{ 
        width: '100vw',
        height: '10vh', 
       
        }}>
     <Typography sx={{
         color: 'red', 
        fontFamily:'Mulish', 
        fontSize:'2rem',
        fontWeight:'bold',
        padding: '10px',
     }}> PASS NAHIN TO FEES NAHIN...  </Typography> 
    </Marquee>
  );
};

export default NewsTrigger;
