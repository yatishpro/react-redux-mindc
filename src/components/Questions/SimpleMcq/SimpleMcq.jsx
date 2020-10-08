import React, {Component} from "react";
import Classes from "./SimpleMcq.module.scss";
import renderHTML from "react-render-html";
import _ from "lodash"

class SimpleMcq extends Component{

    state = {
        selectedOption: ""
    }

    radioChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    render() {
        return(
            <div className={Classes.SimpleMcq}>
                <div className={Classes.question}>
                    <h3>{this.props.data.question_id}.</h3>
                    <h4>{renderHTML(this.props.data.main_question)}</h4>
                </div>

                <div className={Classes.answers}>
                {
                    this.props.data.options.map((value, index) => {
                      return (<div key={index} className={Classes.radio}>
                          <input
                              type="radio"
                              value={value[1]}
                              id={value[1]}
                              checked={this.state.selectedOption === _.toString(value[1])}
                              onChange={this.radioChange}  />
                              <label htmlFor={value[1]}> {renderHTML(value[0])}</label>
                      </div>)
                    })
                }

                </div>
            </div>
        )
    }

}

export default SimpleMcq