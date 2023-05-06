import React, { useState } from 'react'
import { Link } from "react-router-dom";


export const Report = () => {
 
  return (
    <div>
    <div class="max-w-full py-6 overflow-hidden shadow-lg">
    <h1>SheHacks Project</h1>
    <div class="py-4">
    <Link to="/reportform">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      Report Abuse
    </button> 
    </Link>
    </div>
  </div>

  
  </div>
  )
}
