import React from "react";

constDropdown = () => {
    const data = [
        {value: 1, name: 'A'},
        {value: 2, name: 'B'},
        {value: 3, name: 'C'}
    ]

    return(
        <div>
            <select>
                {data.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
            </select>
        </div>
    )
}