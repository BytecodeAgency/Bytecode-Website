import React from "react";
import { IconComponent } from "src/icons/icons.type";
import {Heading, Paragraph} from "../Typography/Typography";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 5px 15px;
`;
const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TextContainer = styled.div`
  padding-left: 10px;
`;

const IconTextBlock: React.FC<{icon: IconComponent; title: string; text: string}> = ({icon, title, text}) => {
	const Icon = icon;
	return (
		<StyledContainer>
			<StyledTitle>
				<Icon color="black" size={20}/>
				<TextContainer><Heading type="h4" text={title}/></TextContainer>
			</StyledTitle>
			<Paragraph text={text}/>
		</StyledContainer>
	);
};
export default IconTextBlock;