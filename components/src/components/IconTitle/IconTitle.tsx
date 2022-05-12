import React from "react";
import styled from "styled-components";
import { Heading } from "../../components/Typography";
import { IconComponent } from "../../icons";
import { ThemeColors } from "../../theme";

const StyledTitle = styled.div<{ big?: boolean}>`
	display: flex;
	flex-direction: row;
	align-items: ${props => props.big ? "flex-start" : "center"};
`;

const StyledHeading = styled(Heading)<{ big?: boolean }>`
	padding-left: ${props => props.big ? "20px" : "10px"};
	${props => props.big && "line-height: 0.8"}
`;

type IconTitleProps = {
    icon: IconComponent;
    text: string;
	color?: ThemeColors;
	big?: boolean;
}

const IconTitle = ({ icon, text, color="black", big }: IconTitleProps) => {
	const Icon = icon;
	return (
		<StyledTitle big={big}>
			<Icon color={color} size={big ? 40 : 20}/>
			<StyledHeading type="h4" text={text} color={color} big={big}/>
		</StyledTitle>
	);
};

export default IconTitle;