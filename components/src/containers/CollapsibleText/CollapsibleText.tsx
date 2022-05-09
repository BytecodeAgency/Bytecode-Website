import React, { useState } from "react";
import { Paragraph } from "../../components";
import styled from "styled-components";
import { Minus, Plus } from "../../icons";
import { ThemeColors } from "../../theme";

const CollapsibleTextContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 32px;
	max-width: 700px;
`;

const TextContainer = styled.div`
	border-bottom: black solid 2px;
`;

type CollapsibleTextProps = {
    title: string;
    description: string;
	color: ThemeColors;
};

const CollapsibleText = ({ title, description, color }:CollapsibleTextProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const collapse = () => setOpen(!open);
	return(
		<CollapsibleTextContainer>
			<TextContainer>
				<Paragraph fontWeight="bold" text={title} color={color}/>
				{ open && <Paragraph text={description} color={color}/>}
			</TextContainer>
			<div onClick={collapse}>
				{
					open
						? <Minus color={color} size={32} />
						: <Plus color={color} size={32} />
				}
			</div>
		</CollapsibleTextContainer>
	);
};

export default CollapsibleText;