import React from 'react';
import imag from '../../assets/report-submit-img.png'

export const Response = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 max-h-screen mx-auto bg-gray-200">
      <img src={imag} alt="report-submitted-image" className="w-20 h-auto py-12" />
      <h1 className="text-3xl font-bold mb-4 text-black">Your report has been submitted successfully</h1>
      <p className="text-lg text-black py-4">Please stand by for authorities.</p>
    </div>
  );
};
