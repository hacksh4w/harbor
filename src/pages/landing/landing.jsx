import React, {useContext} from 'react';
import { ThemeContext } from '../../App';
import { Report } from '../../components/Report/Report';
import { Features } from '../../components/features/Features';

export default function Landing() {
    const {search,setSearch,setSearchResult} = useContext(ThemeContext);
    
  
    return ( <>
    <div className='h-screen'>
    <Report />
    <Features />
    </div>
      
    </>
  )
}
