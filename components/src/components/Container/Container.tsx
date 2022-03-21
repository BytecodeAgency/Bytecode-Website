import styled from "styled-components";
import { layout }from "../../theme";
import {breakpointNameToPx, responsiveValuesCSS} from "../../helpers/responsiveCss";

const marginLeft = responsiveValuesCSS("padding-left", "px", breakpointNameToPx(layout.container.margin));
const marginRight = responsiveValuesCSS("padding-right", "px", breakpointNameToPx(layout.container.margin));

const responsivePaddingsCSS = marginLeft + marginRight;

export const FullWidthContainer = styled.div<{ background?: string }>`
    ${responsivePaddingsCSS};
    background-color: ${props => props.background ? props.background : "unset"}
`;

export const Container = styled(FullWidthContainer)`
    max-width: 1350px;
    margin: auto;
`;

export const MenuContainer = styled(FullWidthContainer)`
    position: fixed;
    top: 0;
    width: 95%;
    z-index: 9999;
    backdrop-filter: blur(5px);
`;

export const InitialContainer = styled(FullWidthContainer)`
    padding-top: 100px;
`;

export default Container;