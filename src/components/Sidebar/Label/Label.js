import React, { Component } from 'react';
import './Label.css';
class Label extends Component {
    render() {

        return (
            <h1 className="h1">
                {this.props.title}
            </h1>
        );
    }
}

export default Label;