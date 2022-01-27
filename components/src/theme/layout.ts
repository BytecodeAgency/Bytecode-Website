type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type BreakpointKeyValue = { [K in BreakpointName]: number; } ;

export const breakpoints : BreakpointKeyValue = {
    xs: 400, // mobile
    sm: 576, // mobile landscape
    md: 768, // tablets
    lg: 992, // Wide
    xl: 1200, // Extra large
    xxl: 1400, // Extra extra large
}

const layout = {
    gutter: 24,
    container: {
        margin: {
            xs: 12,
            sm: 12,
            md: 16,
            lg: 32,
            xl: 48,
            xxl: 64
        },
        // Max Width
        sizes: {
            xs: 540,
            sm: 540,
            md: 720,
            lg: 960,
            xl: 1140,
            xxl: 1320,
        },
        spacing: {
            xs: 20,
            sm: 20,
            md: 40,
            lg: 60,
            xl: 100,
            xxl: 160
        }
    },
}

const responsiveValuesCSS = (
    cssProp = "margin", // the CSS property to apply to the breakpoints
    cssPropUnits = "px", // the units of the CSS property (can set equal to "" and apply units to values directly)
    values: {[K in number]: number}[], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
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
        return {[newKey]: inputValue};
    });
}

const marginLeft = responsiveValuesCSS("margin-left", "px", breakpointNameToPx(layout.container.margin));
const marginRight = responsiveValuesCSS("margin-right", "px", breakpointNameToPx(layout.container.margin));

export const responsiveMarginsCSS = marginLeft + marginRight;

export default layout;