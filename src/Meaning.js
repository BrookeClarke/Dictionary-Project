import React from "react";

export default function Meaning(props) {
    if (props.meaning) {
        return (
            <div className="SearchResults">
                <h3>{props.meaning.definition}</h3>
            </div>
        );
    } else {
        return null;
    }
}