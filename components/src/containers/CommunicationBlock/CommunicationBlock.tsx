import React from "react";
import styled from "styled-components";
import IconTitle from "components/IconTitle";
import {Envelope} from "icons";
import {Paragraph} from "components/Typography";
import {footerContent} from "components/content";

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

const CommunicationBlock = () => {
	const goToMail = () => {
		window.location.href = "mailto:" + footerContent.email;
	};
	const goToPhone = () => {
		window.location.href = "tel:" + footerContent.number;
	};
	return (
		<Container>
			<IconTitle icon={Envelope} text="Direct communication"/>
			<StyledParagraph text={footerContent.email} onClick={goToMail} />
			<StyledParagraph text={footerContent.number} onClick={goToPhone}/>
		</Container>
	);
};

export default CommunicationBlock;