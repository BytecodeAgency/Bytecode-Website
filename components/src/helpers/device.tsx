import { useEffect, useState } from "react";
import { BreakpointName, theme } from "../theme";

interface WindowSize {
    width?: number
    height?: number
}

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
};

export const isWindowDesktop = () => {
	const width = useWindowSize().width;
	return !width || (theme.breakpoints.xl && width > theme.breakpoints.xl);
};

export const isWindowSizeBiggerThan = (size: BreakpointName) => {
	const width = useWindowSize().width;
	return !width || (theme.breakpoints[size] && width > theme.breakpoints[size]);
};
