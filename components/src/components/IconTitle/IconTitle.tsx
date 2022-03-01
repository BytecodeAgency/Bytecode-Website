import React from "react";
import styled from "styled-components";
import {Heading} from "components/Typography";
import { IconComponent } from "icons";

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
}

const IconTitle = ({icon, text}: IconTitleProps) => {
	const Icon = icon;
	return (
		<StyledTitle>
			<Icon color="black" size={20}/>
			<StyledHeading type="h4" text={text}/>
		</StyledTitle>
	);
};

export default IconTitle;