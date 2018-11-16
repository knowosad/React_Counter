import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step"

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
            errorMsg: "",
            errorState: false,
            step: 0,
        }
    }

    execute = (value) => {
        switch (value) {
            case "add":
                this.incrementCounter();
                break;

            case "sub":
                this.subtractCounter();
                break;

            default:
                this.resetCounter();

        }

    }

    incrementCounter = () => {
        this.setState((prevState) => {
            return ({
                counterValue: parseInt(prevState.counterValue) + parseInt(prevState.step),
                errorState: false,
            })
        });

    }

    subtractCounter = () => {
        if (this.validate()) {
            this.setState((prevState) => {
                return ({
                    counterValue: prevState.counterValue - prevState.step,
                })
            })
        } else {
            this.setState((prevState) => {
                return ({
                    errorState: prevState.errorState = true,
                    errorMsg: "Błąd, najpierw zwiększ licznik > " + prevState.step,
                })
            })
        }
    }

    resetCounter = () => {
        this.setState(() => {
            return ({
                counterValue: 0,
                step: 0,
                errorState: false,
            })

        })
    }

    validate = () => {
        if ((this.state.counterValue - this.state.step) >= 0) {
            return true;
        }
        return false;
    }

    getStep = (newStep) => {
        this.setState(() => {
            return ({
                step: newStep,
            })
        })
    }

    render() {
        return (
            <div className="counter">

                <Display
                    currentValue={this.state.counterValue}
                    errorMsg={this.state.errorMsg}
                    errorState={this.state.errorState} />
                <ButtonsPanel
                    updateCounter={this.execute}
                    currentStep={this.state.step}
                />
                <Step
                    updateStep={this.getStep}
                    currentStep={this.state.step}
                />
            </div>
        )
    }
}


// przykład licznika klasowego
// class Counter extends Component {

//     render(){
//         let counterName = "Licznik klasowy: "

//         return(
//             // <div className="counter">{counterName} {Date.now()}</div>
//             //poniżej przekazywanie poprzez propsy
//             <div className="counter">{counterName} {this.props.initValue}</div>
//         )
//     }
// }

// przykład komponentu funkcyjnego
// const Counter = () => {
//     let counterName = "Licznik funkcyjny: "

//     return(
//         <div className="counter">{counterName} {Date.now()}</div>
//     )
// }
