import React from 'react';
import { SiteContext } from '../contexts/SiteData';

export default function Header(){
    const { siteTitle, sitePages } = React.useContext(SiteContext);
    return (
        <div>
            
          <h1 className='tmn-centerText'>{siteTitle}</h1>

          <nav className='tmn-centerText'>
            {sitePages.map(pageName => <a href="/{pageName}"> {pageName} </a>)} 
          </nav>
            
          
    
        </div>
      );
}
