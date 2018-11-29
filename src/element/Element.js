import React from "react";
import "./Element.scss";

const Element = (props) => {
    return (
        <div
            className="Element"
            onClick={props.toggle}
        >
        </div>
    )
};

export default Element;
