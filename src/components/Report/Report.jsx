import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Report.css"


export const Report = () => {
 
  return (
    <div className='repotdiv'>
    <div className="max-w-full text-cl4 py-6 overflow-hidden">
    <h1>Protecto : a SheHacks '23 Project</h1>
    <div className="py-4 my-3">
    <Link to="/reportform">
    <button class="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      Report Abuse
    </button> 
    </Link>
    </div>
  </div>

  
  </div>
  )
}
