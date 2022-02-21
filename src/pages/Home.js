import React from 'react';
import { SiteContext } from '../contexts/SiteData';

export default function HomePage(){
    const { siteTitle } = React.useContext(SiteContext);
    return (
        <div>
          <div className="row tmn-centerText">
            <div className="col">asdf</div>
            <div className="col">asdf</div>
            <div className="col">asdf</div>
          </div>
            
          <h1 className='tmn-centerText'>{siteTitle}</h1>
          <h2>Home Page</h2>
          <input type="button" class="tmn-buttonClasic" value="Input Button" />
          
         
        </div>
      );
}