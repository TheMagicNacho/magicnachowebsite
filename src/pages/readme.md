# SOP for page names

1. File names is the name of the page in Pascal case ( e.g. About.js, Home.js ).
2. Each page exports one function.
    - Function name is in Pascal Case
    - Function name is Page Name & Page ( e.g.``` HomePage() ``` )
3. Import the page into ```index.js```
    ```jsx
    export function About() {
    return <AboutPage />
    }
    ```
4. Don't forget to add the page to the ```App.js``` import.

