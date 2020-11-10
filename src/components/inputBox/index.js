import React from 'react';


const InputBox = ( props ) =>{

    return(
        <div>
            <input type="text" value={ props.inputValue } onChange={ (e) => props.handleChange(e.target.value)}  />
        </div>
    )
}

export default InputBox;