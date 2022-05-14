const typography = {
	baseSize: 18,
	heading: {
		font: "\"Avenir\", system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
		sizes: {
			h1: {
				xs: 2.5,
				sm: 2.5,
				md: 2.5,
				lg: 3,
				xl: 3.556,
				xxl: 3.556,
			},
			h2: {
				xs: 2,
				sm: 2,
				md: 2,
				lg: 2,
				xl: 2.667,
				xxl: 2.667,
			},
			h3: "1.778em",
			h4: "1.333em",
			h5: "1em",
			subtitle: "1em"
		},
		margins: "0.1em 0",
		lineHeights: {
			h3: "1.3em",
			h4: "1.7em",
			h5: "1.4em"
		}
	},
	paragraph: {
		font: "\"Biotif\", system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
		lineHeight: "1.768em",
		sizes: {
			small: ".778em",
			normal: "1em",
			large: "1.333em",
		},
		weights: {
			normal: 400,
			bold: 700,
		},
	},
	monospace: {
		font: "SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
		sizes: {
			small: 0,
			normal: 0,
			large: 0,
		}   
	},
	button: {
		font: "\"Biotif\", system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
		weight: 400,
		sizes: {
			text: 1,
			icon: 1.5,
		}
	},
	menu: {
		mobile: 2
	}
};

export default typography;