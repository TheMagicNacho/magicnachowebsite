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



    // ASSERT: Place logic through use effects here.
    React.useEffect(function(){
        // TODO: Fetch from AirTable
        setSiteTitle('The Magic Nacho');
    },[]);



    // PREPARE THE FINAL CONTEXT OBJECT 
    const dataBall = {
        siteTitle
    }

    // ACT: Return the Site Context provider.
    return <SiteContext.Provider value={dataBall}>{children}</SiteContext.Provider>;
    
}