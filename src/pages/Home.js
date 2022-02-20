import React from 'react';
import { SiteContext } from '../contexts/SiteData';

export default function HomePage(){
    const { siteTitle } = React.useContext(SiteContext);
    return (
        <div>
            
          <h1>{siteTitle}</h1>
          <h2>Home Page</h2>
         
        </div>
      );
}