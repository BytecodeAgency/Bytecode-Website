const typography = {
	baseSize: 18,
	heading: {
		font: "\"Avenir\", system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
		sizes: {
			h1: "3.556em",
			h2: "2.667em",
			h3: 1.778,
			h4: 1.333,
			h5: 1,
			subtitle: "1em"
		}
	},
	paragraph: {
		font: "\"Biotif\", system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
		lineHeight: 1.556,
		sizes: {
			small: .778,
			normal: 1,
			large: 1.333,
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
	menu: {
		mobile: 2
	}
};

export default typography;