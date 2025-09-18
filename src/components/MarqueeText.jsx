import React from 'react';
import './MarqueeText.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import CodeIcon from '@mui/icons-material/Code';
import ReplayIcon from '@mui/icons-material/Replay';

const MarqueeText = () => {
  const content = (
    <>
      <RestaurantIcon className="mx-2 text-[#ff7700] text-5xl" fontSize='30px'/> Eat
      <HotelIcon className="mx-2 text-[#ff7700] text-5xl" fontSize='30px' /> Sleep
      <CodeIcon className="mx-2 text-[#ff7700] text-5xl" fontSize='30px' /> Code
      <ReplayIcon className="mx-2 text-[#ff7700] text-5xl" fontSize='30px' /> Repeat{" "}
    </>
  );

  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee-content font-code">
          {[...Array(10)].map((_, i) => (
            <span className="text-white stroke-slate-500 flex items-center gap-2" key={i}>
              {content}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
