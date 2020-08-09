import React from "react";
import "./style.css";
import Wrapper from "./Wrapper";



function card(props) {
    return (
    <Wrapper>
        <div className="card" onClick={function(){props.shuffle();}}>
            <div className="img-container">
                <img src={props.image}/>
            </div>
        </div>
    </Wrapper>
    );
};

export default card;