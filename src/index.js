import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router'


import App from './components/App'

// import 'antd/lib/style/'
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

document.head.appendChild($("link", {"rel": "stylesheet", "type": "text/css", "href": "dist/css/index.css"}))
let $div = document.body.appendChild($("div"))

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Redirect from='*' to='/'/>
    </Router>
), $div);
