import React, { Component } from 'react';

const CodeBlock = ( props ) => {
    const { letter, color1, color2, number, special } = props.data;
    const bgStyler = function(color) {
        return {
            backgroundColor: color
        }
    }
    return (
    <div className={`block ${special}`} >
        <div className="block-container">
            <div className="top" style={bgStyler(color1)}></div>
            <div className="bottom" style={bgStyler(color2)}></div>
        </div>
        <div className="possible-values">
            <p className="letter" data-val={letter} onClick={(e) => props.data.clickedOn(e)}>{letter}</p>
            <p className="number" data-val={number} onClick={(e) => props.data.clickedOn(e)}>{number}</p>
        </div>

    </div> );
}
 
export default CodeBlock;