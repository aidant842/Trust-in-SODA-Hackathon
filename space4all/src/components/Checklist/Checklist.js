import React from "react";

import { CheckListItems } from "./CheckListItems";

const Checklist = () => {
    return (
        <form>
            {CheckListItems.map((item, index) => {
                return (
                    <div key={index}>
                        <label htmlFor={item.name}>{item.label}</label>
                        <input
                            type="checkbox"
                            name={item.name}
                            id={item.name}
                        />
                    </div>
                );
            })}
        </form>
    );
};

export default Checklist;
