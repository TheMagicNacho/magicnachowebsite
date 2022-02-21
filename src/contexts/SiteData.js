/*
 * Place all site global states here for use throuout the site.
 * Consume with useContext() 
 * We have already wrapped the app in the provider.
 */
import React from 'react';

export const SiteContext = React.createContext();




export default function SiteContextProvider({children}){
    // ARANGE: Place all states here
    let [siteTitle, setSiteTitle] = React.useState('Default Title');
    let [sitePages, setSitePages] = React.useState([""]);
    let [airContext, setAirContext] = React.useState([]);



    React.useEffect(()=>{
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyu5X8dyarA2BVAw'}).base('appCotDAMCWnwCBQc');
    
        base('SiteContext').select({
            view: 'Grid view'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            setAirContext(records);
        });

    },[]);


    // ASSERT: Place logic through use effects here.
    React.useEffect(function(){
       airContext.forEach(function(record){
           // SET SITE-NAME
            if (record.get('Name') ==='site-name'){
                setSiteTitle(record.get('Title'))
            };
            // SET NAVBAR
            // Note: I'm not searching the folder procedurealrly, becaue I don't know how the production environment will behave.
            if (record.get('Name') ==='navbar'){
                const navString = record.get('Title');
                const navArray = navString.split(',');
                
                setSitePages(navArray);
            };
       })
    },[airContext]);




    // PREPARE THE FINAL CONTEXT OBJECT 
    const dataBall = {
        siteTitle,
        airContext,
        sitePages
    }

    // ACT: Return the Site Context provider.
    return <SiteContext.Provider value={dataBall}>{children}</SiteContext.Provider>;
    
}