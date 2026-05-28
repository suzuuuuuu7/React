import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//  const Reactelement = {  // This is how react treat our html code
//     type:"a",
//     props:{
//         href:"https/google.com",
//         target:"_blank"
//     },
//     Children:"Click me here",
//  };
const reactelement =React.createElement(
    'a',
    {href: "https://google.com",target:"_blank"},
    "click me access youtube"
)
function Myapp(){
    return(
        <div> Custome app</div>
    )
}
const anotherelement = (
    <a href = "https://youtube.com" target = "_blank">open link</a>

)
const myelement = "your name"

    

createRoot(document.getElementById('root')).render(
 
<Myapp/>

)
