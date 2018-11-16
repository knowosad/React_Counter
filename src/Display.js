import React, { Component } from "react";

class Display extends Component {

    render() {
        if (this.props.errorState) {
            return (
                <div className="display">
                    <span className="msg">
                        {this.props.errorMsg}
                    </span>
                </div>
            )
        }
        return (
            <div className="display">
                Licznik:
                    <span className="value">
                    {this.props.currentValue}
                </span>
            </div>
        )
    }
}

export default Display;