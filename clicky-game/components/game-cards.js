import React from "react";
import "./style.css";

function card(props) {
    // onClick functions when img is clicked
    return (
        <div className="card" onClick={function(){
            props.shuffle();
        }}>
            <img src={props.image}/>
        </div>
    );
};

export default card;