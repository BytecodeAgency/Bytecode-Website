import React from "react";
import { IconComponent } from "src/icons/icons.type";
import {Heading, Paragraph} from "../Typography/Typography";
import styled from "styled-components";

const StyledContainer = styled.div`
  	padding-right: 15px;
	padding-bottom: 10px;
`;
const StyledTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const StyledHeading = styled(Heading)`
	padding-left: 10px;
`;

const IconTextBlock: React.FC<{icon: IconComponent; title: string; text: string}> = ({icon, title, text}) => {
	const Icon = icon;
	return (
		<StyledContainer>
			<StyledTitle>
				<Icon color="black" size={20}/>
				<StyledHeading type="h4" text={title}/>
			</StyledTitle>
			<Paragraph text={text}/>
		</StyledContainer>
	);
};
export default IconTextBlock;