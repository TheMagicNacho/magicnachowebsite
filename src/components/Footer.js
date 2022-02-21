import React from 'react';
import { SiteContext } from '../contexts/SiteData';
import Badge from '../img/gifs/NetscapeNow.gif'






export default function Footer(){
   

    const { airContext } = React.useContext(SiteContext);
    const year = new Date().getFullYear()

    let [col1State, setCol1State] = React.useState({});
    let [col2State, setCol2State] = React.useState({});
    let [col3State, setCol3State] = React.useState({});

    // ASSERT: Place logic through use effects here.
    React.useEffect(function(){

        airContext.forEach(function(record){
            // SET COL 1
             if (record.get('Name') ==='footer-col-1'){
                 let stateObj = {};
                 stateObj.title = record.get('Title');
                 stateObj.value = record.get('Value');
                 setCol1State(stateObj);
             };
            // SET COL 2
            if (record.get('Name') ==='footer-col-2'){
                let stateObj = {};
                stateObj.title = record.get('Title');
                stateObj.value = record.get('Value');
                setCol2State(stateObj);
            };
            // SET COL 2
            if (record.get('Name') ==='footer-col-3'){
                let stateObj = {};
                stateObj.title = record.get('Title');
                stateObj.value = record.get('Value');
                setCol3State(stateObj);
            };

        })
        
        

     },[airContext]);
 

    return(
        <footer>
            <div className="row tmn-centerText">
                <div className="col">
                    <h5> {col1State.title} </h5>
                    <p> {col1State.value} </p>
                </div>
                <div className="col">
                    <h5> {col2State.title} </h5>
                    <p> {col2State.value} </p>
                        
                </div>
                <div className="col">
                    <h5> {col3State.title} </h5>
                    <p> {col3State.value} </p>
                </div>

            </div>

            <div className="row tmn-centerText">
                <div className="col-xs-12">
                    <img className="tmn-browswer-badge" alt='Retro Browswer Badge' src={Badge} />
                    <p>
                    &copy;{year}
                    <br></br> 
                    Webmaster: Justin Peter
                    </p>
                    
                </div>
            </div>
        </footer>
    );

}