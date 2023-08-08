// import React from "react";

const Dropdown = props => {


    return(
        <div>
            <select>
                {props.options.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;