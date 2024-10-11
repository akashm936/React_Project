import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotheruser = "Akash Morwal 1";

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click here to visit google'
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  // anotheruser,
  // reactElement
  {/* //   anotheruser */}
)
