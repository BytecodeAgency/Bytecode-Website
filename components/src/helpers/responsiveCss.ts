import { BreakpointKeyValue, breakpoints } from "../theme";

export const responsiveValuesCSS = (
	cssProp = "margin", // the CSS property to apply to the breakpoints
	cssPropUnits = "px", // the units of the CSS property (can set equal to "" and apply units to values directly)
	values: { [K in number]:  number | string }[], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
	mediaQueryType = "min-width" // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
): string => {
	const breakpointProps = values.reduce((mediaQueries, value) => {
		const [screenBreakpoint, cssPropBreakpoint] = [
			Object.keys(value)[0],
			Object.values(value)[0].toString(),
		];

		if(screenBreakpoint === "400"){
			return (mediaQueries + `${cssProp}: ${cssPropBreakpoint}${cssPropUnits};`);
		}
		return (mediaQueries + `
		  @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
			${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
		  }
      `);
	}, "");
	return breakpointProps as string;
};

export const breakpointNameToPx = (input: BreakpointKeyValue): { [K in number]: number | string }[] => {
	return Object.entries(input).map(([inputKey, inputValue]) => {
		const newKey = breakpoints[inputKey];
		return { [newKey]: inputValue };
	});
};

export type { BreakpointKeyValue };