import content_json from './config/content'
import React from 'react'
import ReactDOM from 'react-dom'

// normal
window.onload = function() {
    const preload = document.getElementsByClassName('preload')[0];

    preload.addEventListener('animationend', function(e) {
        if (e.animationName === 'fadeout') {
        preload.remove();
    }
    });
};

// render
const project = content_json.map(el =>
    <a href={el.link} key={el.id} target="_blank" rel="noopener noreferrer" className="content">
        <img src={ el.thumb } alt={el.title}/>
        <h4>{el.title}</h4>
    </a>
);
ReactDOM.render(project, document.querySelector('.article'));

// console
console.log('> Love kiwi!  -- Cyris');
