/**
 * Created by panchaohui on 2017/3/26.
 */
import React, {Component} from 'react'
require('./App.css')

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: 'Hello, world'
        }
    }

    render() {
        return (
            <div className="app">
                <h2>{this.state.content}</h2>
            </div>
        );
    }
}

export default App