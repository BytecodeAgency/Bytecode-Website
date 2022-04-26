import React from "react";
import { IconComponent } from "../../icons";
import { Paragraph } from "../../components/Typography";
import styled from "styled-components";
import IconTitle from "../../components/IconTitle";

const StyledContainer = styled.div`
  	padding-right: 15px;
	padding-bottom: 10px;
`;
type IconTextBlockProps = {
	icon: IconComponent;
	title: string;
	text: string;
};
const IconTextBlock = ({ icon, title, text }: IconTextBlockProps) => (
	<StyledContainer>
		<IconTitle icon={icon} text={title} />
		<Paragraph text={text}/>
	</StyledContainer>
);
export default IconTextBlock;