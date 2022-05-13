import React, { useState } from "react";
import { Paragraph } from "../../components";
import styled from "styled-components";
import { Minus, Plus } from "../../icons";
import { ThemeColors } from "../../theme";
import { WithStyle } from "../../types/utils";

const CollapsibleTextContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 32px;
	max-width: 700px;
`;

const TextContainer = styled.div<{color?: string}>`
	border-bottom: ${props => props.color ? `${props.color} solid 2px` : "black solid 2px"};
`;
const StyledParagraph = styled(Paragraph)`
	margin-bottom: 12px;
`;
const StyledTitle = styled(StyledParagraph)`
	margin-right: 60px;
	&:hover {
		cursor: pointer;
	}
`;
const Icon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;


type CollapsibleTextProps = {
    title: string;
    description: string;
	color: ThemeColors;
};

const CollapsibleText = ({ title, description, color, className }:WithStyle<CollapsibleTextProps>) => {
	const [open, setOpen] = useState<boolean>(false);
	const collapse = () => setOpen(!open);
	return(
		<CollapsibleTextContainer className={className}>
			<TextContainer color={color}>
				<StyledTitle fontWeight="bold" text={title} color={color} onClick={collapse}/>
				{ open && <StyledParagraph text={description} color={color}/>}
			</TextContainer>
			<Icon onClick={collapse}>
				{
					open
						? <Minus color={color} size={24} />
						: <Plus color={color} size={24} />
				}
			</Icon>
		</CollapsibleTextContainer>
	);
};

export default CollapsibleText;