import { breakpoints } from "./layout";
import layout from "./layout";
import typography from "./typography";
import { ButtonTypeColors } from "../types/Button.types";
import { BoxesTypeColors } from "src/components/UserPictures/UserPicture.types";

const colors = {
	// Brand
	colorBrand1: "#295D59",
	colorBrand2: "#DFE4E1",
	colorBrand3: "#093632",
	colorBrand4: "#B791C4",

	// Basic colors
	black: "#1B1B1B",
	white: "#FFFFFF",
	lightGray: "#F6F9F6",

	// Sub-colors
	info: "#0B71A1",
	infoLight: "#D3F3FD",
	warning: "#FFBC2C",
	warningLight: "#FCF8DA",
	error: "#F02B41",
	errorLight: "#FFDDE2",
	success: "#39870C",
	successLight: "#DCE8D1",
};

const buttons: ButtonTypeColors = {
	primary: {
		background: colors.colorBrand4,
		color: colors.white,
		hoverBackground: colors.black,
		hoverColor: colors.white,
	},
	secondary: {
		background: colors.colorBrand3,
		color: colors.white,
		hoverBackground: colors.black,
		hoverColor: colors.white,
	}
};

const boxes: BoxesTypeColors = {
	darkGreen: {
		bgColor: colors.white,
		shadowColor: colors.colorBrand1,
		shadowColorHover: colors.black,
	},
	lightGreen: {
		bgColor: colors.white,
		shadowColor: colors.colorBrand2,
		shadowColorHover: colors.black,
	},
	purple: {
		bgColor: colors.white,
		shadowColor: colors.colorBrand4,
		shadowColorHover: colors.black,
	}
};

const circles = {
	top: "top: -3px; right: -6px;",
	bottom: "bottom: -6px; right: -6px;"
};

const theme = {
	colors: {
		...colors,
		buttons,
		boxes,
	},
	breakpoints,
	layout,
	typography,
	shadows: {
		circles
	}
};

export default theme;
