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
                        <label htmlFor={item.name}>{item.label}</label>
                        <input
                            type="checkbox"
                            name={item.name}
                            id={item.name}
                        />
                    </StyledChecklistContainer>
                );
            })}
        </form>
    );
};

const StyledChecklistContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;
    align-items: center;
    text-align: center;
    border: 1px solid var(--green);
    margin: 0.5rem 0;

    label {
        font-size: 1.5rem;
    }
    input {
        accent-color: var(--green);
        margin: 1rem 0;
        height: 50px;
        width: 50px;
    }

    @media (max-width: 768px) {
        display: block;

        label {
            display: block;
        }

        input {
            height: 25px;
            width: 25px;
        }
    }
`;

export default Checklist;
