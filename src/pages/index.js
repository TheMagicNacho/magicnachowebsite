
import React from "react";

// IMPORT PAGES
import AboutPage from "./About";
import HomePage from './Home';


// MANAGE PAGES
export function Home() {
  return <HomePage />
}

export function About() {
  return <AboutPage />
}




/*
 * The React Router passes properties to the components it renders. 
 * For instance, we can obtain the current location via a property. 
 * Let’s use the current location to help us create a 404 Not Found component. 
 * First, we’ll create the component:
 */
export function Whoops404() {
    return (
      <div>
        <h1>404</h1>
        <p>Oops! Resource not found.</p>
      </div>
    );
  }