import React from "react"
import styled from "styled-components"

const SpacerStyling = styled.div`
    width: 100%;
    height: 1px;
    background-color: black;
    ${/* Makes sure it spaces a full css-grid row*/``}
    grid-column: 1/-1;
    ::before {
        content: '';
        display: block;
        height: 20px;
        width: 1px;
        position: absolute;
        border-left: 1px solid black;
    }
`

const Spacer = () => {
    return <SpacerStyling />
}

export default Spacer