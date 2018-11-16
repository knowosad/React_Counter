import React, {Component} from "react";

export default class Step extends Component{

    setStep = (event) => {
        this.props.updateStep(event.target.value);
    }

    render(){
        let currentStep = this.props.currentStep;

        return(
            <div className="stepPanel">
            Krok: 
            <input
                    type="number"
                    onChange={this.setStep}
                    className="step"
                    value={currentStep}/>

            </div>
        )
    }

}