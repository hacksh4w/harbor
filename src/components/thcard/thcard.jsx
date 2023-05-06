/* Therapy card aanu udheshiche*/
import React from 'react'

const thcard = ({thname, thdesignation, thavail}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-1/5 flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-85 m-2 items-start">
      <span className="mb-2 text-blue-700 text-lg font-bold">{thname}</span>
      <span className="mb-2 italic text-base text-black">{thdesignation}</span>
      <span className="mb-2 italic text-base text-blue-950">{thavail}</span>
      <button className="bg-blue-900 text-white py-2 px-4 rounded mt-4">Book Session</button>
    </div>
  )
}

export default thcard
