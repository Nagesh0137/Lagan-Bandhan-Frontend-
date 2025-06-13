import React from 'react';

export default function NotFound({
  label,
  image,
}: {
  label: string;
  image?: any;
}) {
  return (
    <>
      <div className=" justify-center items-center flex py-8">
        <div role="status" className="content-center">
          {image && <img src={image} alt="something" className="h-72" />}
          <div className="block">
            <h1 className="font-Onest text-2xl sm:mx-20 mt-10 font-bold text-black">
              {label}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
