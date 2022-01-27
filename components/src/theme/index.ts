import { breakpoints } from "./layout";
import layout from "./layout";
import typography from "./typography";

const colors = {
	// Brand
	colorBrand1: "#295D59",
	colorBrand2: "#CDD7D1",
	colorBrand3: "#093632",
	colorBrand4: "#B791C4",

	// Sub-colors
	colorInfo: "#0B71A1",
	colorInfoLight: "#D3F3FD",
	colorWarning: "#FFBC2C",
	colorWarningLight: "#FCF8DA",
	colorError: "#F02B41",
	colorErrorLight: "#FFDDE2",
	colorSuccess: "#39870C",
	colorSuccessLight: "#DCE8D1",

	// Basic colors
	black: "#000000",
	white: "#FFFFFF",
	lightGray: "#F6F9F6"
};

const theme = {
	name: "light",
	colors,
	breakpoints,
	layout,
	typography,
};

export default theme;
