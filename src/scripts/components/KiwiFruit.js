import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main'

export default () => {
    return (
        <Router>
            <div className="kiwi-fruit">
                <Route path="/" component={ Main } />
            </div>
        </Router>
    )
}