import styled from "styled-components";
import { layout }from "../../theme";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers/responsiveCss";

const paddingLeft = responsiveValuesCSS("padding-left", "px", breakpointNameToPx(layout.container.margin));
const paddingRight = responsiveValuesCSS("padding-right", "px", breakpointNameToPx(layout.container.margin));

const responsivePaddingsCSS = paddingLeft + paddingRight;

export const FullWidthContainer = styled.div<{ background?: string }>`
    ${responsivePaddingsCSS};
    background-color: ${props => props.background ? props.background : "unset"};
    postition: relative;
`;

export const Container = styled(FullWidthContainer)`
    max-width: 1350px;
    margin: auto;
`;

export const MenuContainer = styled(FullWidthContainer)`
    ${responsivePaddingsCSS};
    position: fixed;
    top: 0;
    z-index: 9998;
    backdrop-filter: blur(5px);
    box-sizing: border-box;
    width: 100%;
`;

export const InitialContainer = styled(FullWidthContainer)`
    padding-top: 100px;
`;

export default Container;