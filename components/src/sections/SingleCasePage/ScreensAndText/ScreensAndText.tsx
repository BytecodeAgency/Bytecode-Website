import React from "react";
import styled from "styled-components";
import { Heading, Paragraph, PhoneScreen } from "../../../components";
import { breakpointNameToPx, responsiveValuesCSS, useWindowSize } from "../../../helpers";
import { theme } from "../../../theme";
import { WithStyle } from "../../../types/utils";

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

type ScreensAndTextProps = {
    title: string;
    text: string;
    screenOne: string;
    screenTwo: string;
}
const ScreensAndText = ({ title, text, screenOne, screenTwo, className }: WithStyle<ScreensAndTextProps>) => {
	const device = useWindowSize();
	const ScreenImages = () => {
		if (!device.width || (theme.breakpoints.md && device.width > theme.breakpoints.md)){
			return (
				<ImageContainer>
					<PhoneScreen image={screenOne} alt="app" height={480}/>
					<PhoneScreen image={screenTwo} alt="app" height={480}/>
				</ImageContainer>
			);
		}
		if (!device.width || (theme.breakpoints.sm && device.width > theme.breakpoints.sm)){
			return (
				<ImageContainer>
					<PhoneScreen image={screenOne} alt="app" height={400}/>
					<PhoneScreen image={screenTwo} alt="app" height={400}/>
				</ImageContainer>
			);
		}
		return (
			<ImageContainer>
				<PhoneScreen image={screenOne} alt="app" height={290}/>
				<PhoneScreen image={screenTwo} alt="app" height={290}/>
			</ImageContainer>
		);
	};
	return(
		<GridContainer className={className}>
			<ScreenImages />
			<TextContainer>
				<StyledHeading type="h3" text={title}/>
				<Paragraph text={text}/>
			</TextContainer>
		</GridContainer>
	);
};

export default ScreensAndText;