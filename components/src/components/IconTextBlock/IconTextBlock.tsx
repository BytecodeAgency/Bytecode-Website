import React from "react";
import { IconComponent } from "src/icons/icons.type";
import { Paragraph} from "../Typography/Typography";
import styled from "styled-components";
import IconTitle from "../IconTitle/IconTitle";

const StyledContainer = styled.div`
  	padding-right: 15px;
	padding-bottom: 10px;
`;

const IconTextBlock: React.FC<{icon: IconComponent; title: string; text: string}> = ({icon, title, text}) => (
	<StyledContainer>
		<IconTitle icon={icon} text={title} />
		<Paragraph text={text}/>
	</StyledContainer>
);
export default IconTextBlock;