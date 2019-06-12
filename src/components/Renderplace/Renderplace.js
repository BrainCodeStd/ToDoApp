import React, { Component } from 'react';
import './Renderplace.css'
class Renderplace extends Component {
    render() {
        return (

            <div className="renderplace fade-in ">{this.props.children}</div>
          
        );
    }
}

export default Renderplace;