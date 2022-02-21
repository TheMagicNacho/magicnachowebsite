import React from 'react';

//CUSTOM IMPORTS
import HeaderGifs from './HeaderGifs';
import { SiteContext } from '../contexts/SiteData';

export default function Header(){
    const { siteTitle, sitePages } = React.useContext(SiteContext);
    
    return (
       
          <header>
            <div className="row">
              <div className="col">
                <div className="left">
                  <HeaderGifs />
                </div>

              </div>
              <div className="col">
                <h1 className='tmn-centerText'>{siteTitle}</h1>
              </div>

              <div className="col">
                <div className="right">
                  <HeaderGifs />
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col">
                <nav className='tmn-centerText'>
                  <ol>
                      {sitePages.map((pageName, key) => 
                        <li key={key} className="tmn-navbar">
                          <a  href={pageName}> {pageName} </a> 
                        </li>
                      )}
                  </ol>
                </nav>
              </div>
            </div>
          </header>

                           
    
      );
}
