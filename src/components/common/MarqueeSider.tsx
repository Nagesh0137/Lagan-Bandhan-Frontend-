import React from 'react';
import { Info } from '../../config/constant';
import Marquee from 'react-fast-marquee';

const MarqueeSider = () => {
  return (
    <>
      <div className="mt-10">
        <Marquee gradient speed={50}>
          <div className="flex">
            <p className="font-Onest text-gray-400">{Info.text}</p>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeSider;
