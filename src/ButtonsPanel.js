import React, { Component } from "react";

export default class ButtonsPanel extends Component {

    updateCounter = (value) => {
        this.props.updateCounter(value)
    }

    render() {
        let currentStep = this.props.currentStep;
        return (
            <div className="buttonsPanel">

                <button onClick={() => this.updateCounter("add")}>
                    { currentStep > 0 ? "Zwiększ o " + currentStep : "Zwiększ"}
                </button>

                <button onClick={() => this.updateCounter("reset")}>
                    Zresetuj
                </button>

                <button onClick={() => this.updateCounter("sub")}>
                    {currentStep > 0 ? "Zmniejsz o " + currentStep : "Zmniejsz"}
                </button>

            </div>
        )
    }
}