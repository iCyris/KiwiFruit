import React from 'react'
import content_json from "../config/content";

export default () => {
    const project = content_json.map(el =>
        <a href={el.link} key={el.id} target="_blank" rel="noopener noreferrer" className="content">
            <img src={ el.thumb } alt={el.title}/>
            <h4>{el.title}</h4>
        </a>
    )

    return (
        <div className="main">
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
        </div>
    )
}