import { Grid, Typography } from '@mui/material';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Img from './img/trigger.png';

const NewsTrigger = () => {

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <img src={Img} alt='trigger' style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default NewsTrigger;

  // const gradientStyle = {
  //   background: 'radial-gradient(circle at 92% 194%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
  //   WebkitBackgroundClip: 'text',
  //   WebkitTextFillColor: 'transparent',
  // };
  // const gradientStyleS = {
  //   background: 'radial-gradient(circle at 92% 194%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
  //   WebkitBackgroundClip: 'text',
  //   WebkitTextFillColor: 'transparent',
  // };



// <div>

//     <img src={Img} aly='trigger' style={{
//       rotate: '272deg',
// width: '25%',
//     }}/>
// </div>
{/* <Typography sx={{
         color: 'red', 
        fontFamily:'Mulish', 
        fontSize:'2rem',
        fontWeight:'bold',
        padding: '10px',
     }}> PASS NAHIN TO FEES NAHIN...  </Typography>  */}
    // </Marquee>


  //   <Grid container spacing={2}>
  //   <Grid xs={6} md={4}
  //     sx={gradientStyle}
  //   >
  //     <Typography
  //       sx={{
  //         fontWeight: 'bold',
  //         fontSize: '1.2rem',
  //       }}
  //     >Pass Nahi</Typography>
  //   </Grid>
  //   <Grid xs={6} md={4} >
  //     <Typography
  //       sx={{
  //         position: 'relative', top: '0.9rem', left: '-1rem',
  //         fontWeight: 'bold',
  //         fontSize: '1rem',
  //       }}>Toh</Typography>
  //   </Grid>
  //   <Grid xs={6} md={4} xsOffset={4} sx={gradientStyle}>
  //     <Typography
  //       sx={{
  //         top: '0.2rem',
  //         marginLeft: '6.6rem',
  //         fontWeight: 'bold',
  //         fontSize: '1.2rem',
  //         color: 'red',
  //       }}
  //     >
  //       Fees Nahi
  //     </Typography>
  //   </Grid>
  // </Grid>