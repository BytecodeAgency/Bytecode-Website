export type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type BreakpointKeyValue = { [K in BreakpointName]?: number | string; } ;
type AllBreakPointKeyValues = { [K in BreakpointName]: number | string; } ;

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
};

export const breakpoints : AllBreakPointKeyValues = {
	xs: 400, // mobile
	sm: 576, // mobile landscape
	md: 768, // tablets
	lg: 992, // Wide
	xl: 1200, // Extra large
	xxl: 1400, // Extra extra large
};

export default layout;