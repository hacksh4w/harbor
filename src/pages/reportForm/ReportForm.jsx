import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const ReportForm = () => {
    const navigate = useNavigate();

    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [isReportingForSelf, setIsReportingForSelf] = useState(false);
  
    const handleLocationChange = event => setLocation(event.target.value);
    const handleDescriptionChange = event => setDescription(event.target.value);
    const handleIsReportingForSelfChange = event => setIsReportingForSelf(event.target.checked);
  
    const handleSubmit = event => {
      event.preventDefault();
      // do something with the form data, e.g. send it to a server
      navigate('/response');
    };
  
    return (
      <div className="popup-form-container flex items-center justify-center h-screen pt-20">
        <form className="w-full max-w-sm h-screen" >
  
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="location-input">
                Location
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                id="location-input"
                type="text"
                value={location}
                onChange={handleLocationChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>
  
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description-input">
                Description
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                id="description-input"
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>
  
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input
                type="checkbox"
                checked={isReportingForSelf}
                onChange={handleIsReportingForSelfChange}
                className="mr-2 leading-tight"
              />
              <span className="text-sm">
                Are you reporting for yourself?
              </span>
            </label>
          </div>
  
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                type="submit"
                onClick={handleSubmit}
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
  
        </form>
      </div>
    );
}
