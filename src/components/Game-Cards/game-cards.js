import React from "react";
import "./style.css";



function card(props) {
    return (
    <div className="col-sm-12 col-md-4 col-lg-3">
        <div className="card" onClick={function(){
            props.shuffle();
            props.handleIncrement(props.id);
        }}>
            <div className="img-container">
                <img src={props.image}/>
            </div>
        </div>
    </div>
    );
};

export default card;