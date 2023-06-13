import React, { useState, useEffect } from 'react';
import BannerSlider from './BannerSlider';

const Slider = () => {
  const [bannerData, setBannerData] = useState([]);
  const instId = 1; // Replace with the actual instId

  useEffect(() => {
    async function fetchPublicBanner() {
      try {
        const response = await fetch(`https://api.softkitesinfo.com/admin/banner/fetch-public-banner/${instId}`);

        if (response.ok) {
          const data = await response.json();
          // Process the data here
          // console.log(data);

          // Set the banner data to the state
          setBannerData(data);
        } else {
          // console.log('Error:', response.status);
        }
      } catch (error) {
        // console.log('Request failed:', error);
      }
    }

    fetchPublicBanner();
  }, [instId]);



  const imgList = () => {
    return bannerData.banners.map((banner) => (
      <img
        src={`https://media.theoogway.com/${banner.banner}`}
        key={banner.id}
        alt={`Banner ${banner.id}`}
        style={{
          aspectRatio: '16/9',
          width: '100%',
          objectFit: 'contain',
          borderRadius: '30px',
        }}
      />
    ));
  };

  return (
    <div>
      {bannerData && bannerData.banners && bannerData.banners?.length > 0 ? (
        <BannerSlider slides={imgList()} />
      ) : (
        <p style={{textAlign:'center'}}>Loading...</p>
      )}
    </div>
  );
};

export default Slider;
