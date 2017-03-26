/**
 * Created by panchaohui on 2017/3/26.
 */
import React, {Component} from 'react'
import {markdown} from 'markdown'

class MarkDown extends Component {

    constructor(props) {
        console.info(markdown)
        super(props)
        this.state = {
            mdText: '123'
        }
    }

    md2Html(e) {
        let tVal = e.target.value;
        this.setState({
            mdText: tVal
        })
        let result = markdown.toHTML(tVal)
        console.log(result)
        this.refs.result.innerHTML = result;
    }

    render() {
        return (
            <div style={{clear: "both"}}>
                <textarea style={{width:"49%",float:"left"}} onChange={this.md2Html.bind(this)} value={this.state.mdText}></textarea>
                <div style={{width:"49%",float:"left"}} ref="result"></div>
            </div>
        )
    }
}

export default MarkDown