import React from "react";
import styled from "styled-components";

const SpacerStyling = styled.div<{ color: SpacerColor }>`
    width: 100%;
    height: 1px;
    background-color: ${props => props.color};
    ${/* Makes sure it spaces a full css-grid row*/""}
    grid-column: 1/-1;
    ::before {
        content: '';
        display: block;
        height: 20px;
        width: 1px;
        position: absolute;
        border-left: ${props => `1px solid ${props.color};`}
    }
`;

type SpacerColor = "black" | "white";

const Spacer: React.FC<{ color: SpacerColor, className?: string}> = ({ color, className }) => {
	return <SpacerStyling className={className} color={color} />;
};

export default Spacer;