import React from 'react'
import ReactDOM from 'react-dom'
import KiwiFruit from './components/KiwiFruit'

window.onload = function() {
    const preload = document.getElementsByClassName('preload')[0]

    preload.addEventListener('animationend', (e) => {
        if (e.animationName === 'fadeout') {
            preload.remove()
        }
    })
}

// console
console.log('> Love kiwi!  -- Cyris')

ReactDOM.render (
    <KiwiFruit />,
    document.getElementById('root')
)