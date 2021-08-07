import React, { Component } from 'react'

export class Colors extends Component {
    render() {
        const {colors} = this.props;
        return (
            <li className="colors">
                {
                colors.map((color, index) =>(
                    <button style={{background: color}} key={index}></button>
                ))
                }
            </li>
        )
    }
}

export default Colors
