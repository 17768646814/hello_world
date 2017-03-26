/**
 * Created by panchaohui on 2017/3/26.
 */
import {Comonent} from 'react'
import markdown from 'markdown'

class MdUtil extends Comonent {

    constructor(props) {
        super(props)
        this.state = {
            mdText: ''
        }
        console.info(markdown)
    }


    md2Html() {
        let result = markdown.toHTML(this.state.mdText)
        console.log(result)
        this.refs.result.innerHTML = result;
    }

    render() {
        return (
            <div>
                <textarea onChange={this.md2Html}>{this.state.mdText}</textarea>
                <pre ref="result"></pre>
            </div>
        )
    }
}

export default MdUtil