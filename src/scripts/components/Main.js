import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import content_json from "../config/content"
import Watch from './Watch'

export default () => {
    const [showPreload, setShowPreload] = useState(true);
    const project = content_json.map(el =>
        <Link to={ `/watch/${ el.id }` } key={ el.id } className="content">
            <img src={ el.thumb } alt={ el.title }/>
            <h4>{ el.title }</h4>
        </Link>
    )

    return (
        <div className="main">
            <div 
                className="preload" 
                style={{display: showPreload ? undefined : 'none'}} 
                onAnimationEnd={(el) => {
                    if (el?.target?.className === 'preload') {
                        setShowPreload(false);
                    }
                }}>
                <div className="cover" />
                <div className="icon" />
            </div>
            <div className="title">
                <div className="logo" />
                <div className="description">
                    KiwiFruit is a collection of Cyris's CSS animation works.
                    I love kiwi fruit and CSS is just as cute as this fruit.
                    All the codes are open source on GitHub.
                </div>
            </div>
            <div className="article">
                { project }
            </div>
            <div className="footer">
                <a title="Home" href="https://cyris.moe" target="_blank" rel="noopener noreferrer">
                    <i className="czs-network-l" />
                </a>
                <a title="GitHub" href="https://github.com/iCyris/KiwiFruit" target="_blank" rel="noopener noreferrer">
                    <i className="czs-github-logo" />
                </a>
            </div>
            <div className="modal-watch">
                <Route exact path="/watch/:kiwiName" component={ Watch } />
            </div>
        </div>
    )
}