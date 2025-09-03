import React from 'react';
import './MarqueeText.css';

const MarqueeText = () => {
  const content = "We build our image. one patient at a time.";

  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee-content">
          {[...Array(10)].map((_, i) => (
            <span className='text-white stroke-slate-500' key={i}>{content}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MarqueeText;
