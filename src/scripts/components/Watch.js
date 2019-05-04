import React from 'react'
import { Link } from 'react-router-dom'
import content_json from "../config/content"

export default (props) => {
    const cid = props.match.params.kiwiName
    const watch_content = {}

    try {
        for (let i of content_json){
            if (i.id === cid) {
                Object.assign(watch_content, i)
            }
        }
    } catch (e) {
        console.log("No such content", e)
    }

    return (
        <div className="content">
            <div className="w-thumb">
                <img src={ watch_content.thumb } alt={ watch_content.title }/>
            </div>
            <div className="w-title">
                { watch_content.title }
            </div>
            <div className="w-intro">
                { watch_content.intro }
            </div>
            <div className="w-see">
                <a href={ watch_content.link } rel="noopener noreferrer" target="_blank"> See the page </a>
            </div>
            <div className="w-close">
                <Link to="/">
                    <div /><div />
                </Link>
            </div>
        </div>
    )
}