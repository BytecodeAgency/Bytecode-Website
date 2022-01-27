import styled from "styled-components";
import layout, { BreakpointKeyValue, breakpoints } from "../../theme/layout";

const responsiveValuesCSS = (
    cssProp = "margin", // the CSS property to apply to the breakpoints
    cssPropUnits = "px", // the units of the CSS property (can set equal to "" and apply units to values directly)
    values: { [K in number]: number }[], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
    mediaQueryType = "min-width" // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) => {
    const breakpointProps = values.reduce((mediaQueries, value) => {
        const [screenBreakpoint, cssPropBreakpoint] = [
            Object.keys(value)[0],
            Object.values(value)[0],
        ];
        return (mediaQueries += `
      @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
        ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
      }
      `);
    }, "");

    return breakpointProps;
};

const breakpointNameToPx = (input: BreakpointKeyValue): { [K in number]: number }[] => {
    return Object.entries(input).map(([inputKey, inputValue]) => {
        const newKey = breakpoints[inputKey];
        return { [newKey]: inputValue };
    });
}

const marginLeft = responsiveValuesCSS("padding-left", "px", breakpointNameToPx(layout.container.margin));
const marginRight = responsiveValuesCSS("padding-right", "px", breakpointNameToPx(layout.container.margin));

const responsivePaddingsCSS = marginLeft + marginRight;

export const Container = styled.div<{ background?: string }>`
    ${responsivePaddingsCSS}
    background-color: ${props => props.background ? props.background : "unset"}
`

export const MenuContainer = styled(Container)`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
`

export const InitialContainer = styled(Container)`
    padding-top: 100px;
`