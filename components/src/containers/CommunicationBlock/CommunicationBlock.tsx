import React from "react";
import styled from "styled-components";
import IconTitle from "../../components/IconTitle";
import { Envelope } from "../../icons";
import { Paragraph } from "../../components/Typography";
import { footerContent } from "../../content";
import { ThemeColors } from "../../theme";
import { WithStyle } from "../../types/utils";

const Container = styled.div`
	grid-area: communication;
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-bottom: 20px;
`;
const StyledParagraph = styled(Paragraph)`
	margin-top: 5px;
	margin-bottom: 0;
	&:hover{
		cursor: pointer;
	}
`;

type CommunicationsBlockProps = {
	color?: ThemeColors;
}

const CommunicationBlock = ({ color = "black", className }: WithStyle<CommunicationsBlockProps>) => {
	const goToMail = () => {
		window.location.href = "mailto:" + footerContent.email;
	};
	const goToPhone = () => {
		window.location.href = "tel:" + footerContent.number;
	};
	return (
		<Container className={className}>
			<IconTitle icon={Envelope} text="Direct communication" color={color}/>
			<StyledParagraph text={footerContent.email} onClick={goToMail} color={color}/>
			<StyledParagraph text={footerContent.number} onClick={goToPhone} color={color}/>
		</Container>
	);
};

export default CommunicationBlock;