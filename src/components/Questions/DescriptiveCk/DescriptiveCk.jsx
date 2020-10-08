import React, {Component} from "react";
import Classes from "./DescriptiveCk.module.scss"
import renderHtml from "react-render-html"
import CKEditor from "ckeditor4-react"

class DescriptiveCk extends Component {

    state = {
        ckData: ""
    }

    onEditorChange = (event) => {
        this.setState({
            ckData: event.editor.getData()
        })
    }



    render() {
        let main_question = this.props.data.main_question.replace("src=\"","src=\"http://shhss.demo.mcms.asia/");

        return(
            <div className={Classes.DescriptiveCk}>
                    <div className={Classes.question}>
                        <h3>{this.props.data.question_id}.</h3>
                        <h4>{renderHtml(main_question)}</h4>
                    </div>
                    <div className={Classes.answers}>
                        <CKEditor
                            // config={{
                            //     toolbar: [
                            //         [ 'Bold', 'Italic' ],
                            //         [ 'Cut', 'Copy' ],
                            //         [ 'About' ]
                            //     ]
                            // }}
                            onChange={this.onEditorChange}
                            data="" />
                    </div>
                <div>
                    {renderHtml(this.state.ckData)}
                </div>
            </div>
        )
    }
}

export default DescriptiveCk