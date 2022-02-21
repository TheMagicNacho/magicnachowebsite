import React from 'react';

import Header from '../components/Header'

export default function SinkPage(){

    return (
        <div>
            
          <Header />

          <input type="button" className="tmn-buttonClasic" value="Input Button" />


            <h2>Columns Example</h2>
          <div className="row tmn-centerText">
              <div className="col">
                asdf
              </div>
              <div className="col">
                asdf
              </div>
              <div className="col">
                asdf
              </div>
              <div className="col">
                asdf
              </div>
          </div>
         
        </div>
      );
}