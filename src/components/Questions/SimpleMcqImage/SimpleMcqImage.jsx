import React, {Component} from "react";
import Classes from "./SimpleMcqImage.module.scss";



class SimpleMcqImage extends Component{

    state = {
        selectedImgOption: ""
    }

    radioChange = (e) => {
        this.setState({
            selectedImgOption: e.target.value
        })
    }

    render() {

        return(
            <div className={Classes.SimpleMcqImage}>
                <div className={Classes.question}>
                    <h3>{this.props.data.number}.</h3>
                    <h4>{this.props.data.question}</h4>
                </div>

                <div className={Classes.answers}>
                    {
                        this.props.data.answers.map((value, index) => {
                            return (<div key={index} className={Classes.radio}>
                                <input
                                    className={Classes.inputHidden}
                                    type="radio"
                                    value={value}
                                    id={this.props.data.number + value}
                                    checked={this.state.selectedImgOption === value}
                                    onChange={this.radioChange}  />
                                    <label htmlFor={this.props.data.number + value} >
                                        <img  alt="mcq" src="http://mindcorp.local/media/mindcom/expert/turning.png"/>
                                    </label>
                            </div>)
                        })
                    }

                </div>
            </div>
        )
    }

}

export default SimpleMcqImage