import styled from "styled-components";
import { layout }from "../../theme";
import {breakpointNameToPx, responsiveValuesCSS} from "../../helpers/responsiveCss";

const marginLeft = responsiveValuesCSS("padding-left", "px", breakpointNameToPx(layout.container.margin));
const marginRight = responsiveValuesCSS("padding-right", "px", breakpointNameToPx(layout.container.margin));

const responsivePaddingsCSS = marginLeft + marginRight;

export const Container = styled.div<{ background?: string }>`
    ${responsivePaddingsCSS};
    background-color: ${props => props.background ? props.background : "unset"}
`;

export const MenuContainer = styled(Container)`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
`;

export const InitialContainer = styled(Container)`
    padding-top: 100px;
`;

export default Container;