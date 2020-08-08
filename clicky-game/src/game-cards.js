import React from "react";
import "./style.css";

function card(props) {
    // onClick functions when img is clicked
    return (
        <div className="card" onClick={function(){props.shuffle();}}>
            <div className="img-container">
                <img src={props.image}/>
            </div>
        </div>
    );
};

export default card;