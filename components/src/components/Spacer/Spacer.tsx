import React from "react";
import styled from "styled-components";

const SpacerStyling = styled.div<{ color: SpacerColor, bold?: boolean }>`
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
        border-left: ${props => props.bold ? `2px solid ${props.color};` : `1px solid ${props.color};`}
    }
`;

type SpacerColor = "black" | "white";

const Spacer: React.FC<{ color: SpacerColor, className?: string, bold?: boolean}> = ({ color, className, bold }) => {
	return <SpacerStyling className={className} color={color} bold={bold} />;
};

export default Spacer;