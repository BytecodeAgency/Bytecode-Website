import React from "react";
import styled from "styled-components";
import IconTitle from "../IconTitle/IconTitle";
import {Envelope} from "../../icons/icons";
import {Paragraph} from "../Typography/Typography";
import {FooterContent} from "../content";

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

const Communication = () => {
	const goToMail = () => {
		window.location.href = "mailto:" + FooterContent.email;
	};
	const goToPhone = () => {
		window.location.href = "tel:" + FooterContent.number;
	};
	return (
		<Container>
			<IconTitle icon={Envelope} text="Direct communication"/>
			<StyledParagraph text={FooterContent.email} onClick={goToMail} />
			<StyledParagraph text={FooterContent.number} onClick={goToPhone}/>
		</Container>
	);
};

export default Communication;