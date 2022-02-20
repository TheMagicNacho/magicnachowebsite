import React from 'react';
import { SiteContext } from '../contexts/SiteData';

export default function AboutPage(){
    const { siteTitle } = React.useContext(SiteContext);
    return (
        <div>
            
          <h1>{siteTitle}</h1>
          <h2>About</h2>
         
        </div>
      );
}