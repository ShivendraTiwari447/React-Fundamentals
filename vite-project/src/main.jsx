import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const anotherElement = (
    <a
        href="https://google.com"
        target="_blank"
    >
        Visit Google
    </a>
)


const anotherUser = "shivendra Tiwari"


const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'click me to visit google',
    anotherElement
)


createRoot(document.getElementById('root')).render(
    reactElement
)