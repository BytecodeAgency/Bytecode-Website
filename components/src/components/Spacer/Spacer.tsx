import React from "react";
import styled from "styled-components";
import { WithStyle } from "../../types/utils";

const SpacerStyling = styled.div<{ color: SpacerColor, bold?: boolean, reverse?: boolean }>`
    width: 100%;
    height: ${props => props.bold ? "2px" : "1px"};
    background-color: ${props => props.color};
    ${/* Makes sure it spaces a full css-grid row*/""}
    grid-column: 1/-1;
    ::before {
        content: '';
        display: block;
        height: 10px;
        width: 1px;
        position: absolute;
        border-left: ${props => props.bold ? `2px solid ${props.color};` : `1px solid ${props.color};`};
    }
    transform: ${props => props.reverse ? "scale(-1, 1)" : ""};
`;

type SpacerColor = "black" | "white";
interface SpacerProps {
    color?: SpacerColor;
    bold?: boolean;
    reverse?: boolean
}

const Spacer = ({ color = "black", className, bold, reverse }: WithStyle<SpacerProps>) => {
	return <SpacerStyling className={className} color={color} bold={bold} reverse={reverse} />;
};

export default Spacer;