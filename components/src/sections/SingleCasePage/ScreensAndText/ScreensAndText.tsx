import React from "react";
import styled from "styled-components";
import { Heading, LaptopScreen, Paragraph, PhoneScreen } from "../../../components";
import { breakpointNameToPx, responsiveValuesCSS, useWindowSize } from "../../../helpers";
import { theme } from "../../../theme";
import { WithStyle } from "../../../types/utils";
import { ScreensAndTextProps } from "../SingleCasePage.types";

const GridContainer = styled.div`
  	display: grid;
  	grid-template-columns: 1fr;
	max-width: 800px;
`;

const ImageContainer = styled.div`
  	justify-self: center;
	display: flex;
	flex-direction: row;
	gap: 40px;
`;

const textContainerResponsiveStyling = responsiveValuesCSS(
	"grid-template-columns",
	"",
	breakpointNameToPx({
		md: "2fr 3fr"
	})
);

const TextContainer = styled.div`
	${textContainerResponsiveStyling};
  	display: grid;
	margin-top: 60px;
`;

const StyledHeading = styled(Heading)`
	margin-right: 30px
`;

const ScreensAndText = ({ title, text, screenOne, screenTwo, className }: WithStyle<ScreensAndTextProps>) => {
	const device = useWindowSize();


	const ScreenImages = () => {
		if (!screenTwo) {
			if (!device.width || (theme.breakpoints.md && device.width > theme.breakpoints.md)) {
				return (
					<ImageContainer>
						<LaptopScreen image={screenOne} alt="app" height={400} />
					</ImageContainer>
				);
			}
			if (!device.width || (theme.breakpoints.sm && device.width > theme.breakpoints.sm)) {
				return (
					<ImageContainer>
						<LaptopScreen image={screenOne} alt="app" height={300} />
					</ImageContainer>
				);
			}
			return (
				<ImageContainer>
					<LaptopScreen image={screenOne} alt="app" height={200} />
				</ImageContainer>
			);
		}

		if (screenTwo) {
			if (!device.width || (theme.breakpoints.md && device.width > theme.breakpoints.md)) {
				return (
					<ImageContainer>
						<PhoneScreen image={screenOne} alt="app" height={480} />
						<PhoneScreen image={screenTwo} alt="app" height={480} />
					</ImageContainer>
				);
			}
			if (!device.width || (theme.breakpoints.sm && device.width > theme.breakpoints.sm)) {
				return (
					<ImageContainer>
						<PhoneScreen image={screenOne} alt="app" height={400} />
						<PhoneScreen image={screenTwo} alt="app" height={400} />
					</ImageContainer>
				);
			}
			return (
				<ImageContainer>
					<PhoneScreen image={screenOne} alt="app" height={290} />
					<PhoneScreen image={screenTwo} alt="app" height={290} />
				</ImageContainer>
			);
		}

		return null;
	};


	return (
		<GridContainer className={className}>
			<ScreenImages />
			<TextContainer>
				<StyledHeading type="h3" text={title} />
				<Paragraph text={text} />
			</TextContainer>
		</GridContainer>
	);
};

export default ScreensAndText;