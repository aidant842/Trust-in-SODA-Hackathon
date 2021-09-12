import React from "react";

//Styled Components
import styled from "styled-components";

//Data
import { CheckListItems } from "./CheckListItems";

const Checklist = () => {
    return (
        <form>
            {CheckListItems.map((item, index) => {
                return (
                    <StyledChecklistContainer key={index}>
                        <input
                            type="checkbox"
                            name={item.name}
                            id={item.name}
                        />
                        <label htmlFor={item.name}>{item.label}</label>
                    </StyledChecklistContainer>
                );
            })}
        </form>
    );
};

const StyledChecklistContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    label {
        font-size: 1.5rem;
    }
    input {
        accent-color: var(--green);
        margin: 1rem 0;
        height: 50px;
        width: 50px;
    }
`;

export default Checklist;
