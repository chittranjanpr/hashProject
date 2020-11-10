import React, { Component, Fragment } from 'react';
import DisplayBox from '../displayBox.js';
import InputBox from '../inputBox';


export default class MainScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : 'heloo'
        }
    }

    handleBox = ( data ) =>{
        this.setState({inputValue: data })
    }

    render(){
        return(
            <Fragment>
                <InputBox { ...this.state } handleChange={ this.handleBox } />
                <DisplayBox { ...this.state } />
            </Fragment>
        )
    }
}