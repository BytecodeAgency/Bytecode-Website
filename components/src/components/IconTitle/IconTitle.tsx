import React from "react";
import styled from "styled-components";
import { Heading } from "../../components/Typography";
import { IconComponent } from "../../icons";
import { ThemeColors } from "../../theme";

const StyledTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const StyledHeading = styled(Heading)`
	padding-left: 10px;
`;

type IconTitleProps = {
    icon: IconComponent;
    text: string;
	color?: ThemeColors;
}

const IconTitle = ({ icon, text, color="black" }: IconTitleProps) => {
	const Icon = icon;
	return (
		<StyledTitle>
			<Icon color={color} size={24}/>
			<StyledHeading type="h4" text={text} color={color}/>
		</StyledTitle>
	);
};

export default IconTitle;