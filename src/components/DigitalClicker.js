// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor(){
        super();
        this.state ={
            timesClicked: 0
        }
    }

    clicked = () => {
        const newTimes = this.state.timesClicked + 1
        this.setState( {
            timesClicked: newTimes
        })

    }
    render(){
        return(
            <div>
                <button onClick={this.clicked}>{this.state.timesClicked}</button></div>
        )
    }
}
