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
    let [sitePages, setSitePages] = React.useState([]);



    // ASSERT: Place logic through use effects here.
    React.useEffect(function(){
        // TODO: Fetch from AirTable
        setSiteTitle('The Magic Nacho');
    },[]);

    // Note: I'm not searching the folder procedurealrly, becaue I don't know how the production environment will behave.
    React.useEffect(function(){
        // TODO: Fetch from AirTable
        setSitePages(["Home", "About"]);
    },[]);



    // PREPARE THE FINAL CONTEXT OBJECT 
    const dataBall = {
        siteTitle,
        sitePages
    }

    // ACT: Return the Site Context provider.
    return <SiteContext.Provider value={dataBall}>{children}</SiteContext.Provider>;
    
}