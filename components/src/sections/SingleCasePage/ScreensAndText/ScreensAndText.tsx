import React from "react";
import styled from "styled-components";
import {Container, Heading, Paragraph, PhoneScreen} from "../../../components";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
	max-width: 800px;
`;

const ImageContainer = styled.div`
  	justify-self: center;
	display: flex;
	flex-direction: row;
`;

const TextContainer = styled.div`
  	display: grid;
	grid-template-columns: 2fr 3fr;
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
const ScreensAndText = ({title, text, screenOne, screenTwo}: ScreensAndTextProps) => (
	<GridContainer>
		<ImageContainer>
			<PhoneScreen image={screenOne} alt="app" height={480} />
			<PhoneScreen image={screenTwo} alt="app" height={480} />
		</ImageContainer>
		<TextContainer>
			<StyledHeading type="h3" text={title} />
			<Paragraph text={text} />
		</TextContainer>
	</GridContainer>
);

export default ScreensAndText;