import React from 'react'
import {render} from 'react-dom'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import App from './components/App'

import 'antd/lib/style/'
import 'antd/dist/antd.css'


((undefined) => {
    let $ = window.$ = function (sel, attr) {
        let ele = document.createElement(sel)
        attr = attr || {};
        for (let i in attr) {
            ele.setAttribute(i, attr[i])
        }
        return ele;
    }

    return $;
})();

document.head.appendChild($("link", {"rel": "stylesheet", "type": "text/css", "href": "dist/css/index-css.css"}))
document.head.appendChild($("link", {"rel": "stylesheet", "type": "text/css", "href": "dist/css/index-less.css"}))
document.head.appendChild($("script", {"src": "/dist/react-router.js"}))
let $div = document.body.appendChild($("div"))

render((
    <Router>
        <Route exact path="/" component={App}/>
    </Router>
), $div);
