import React from "react";
import styled from "styled-components";
import IconTitle from "../IconTitle/IconTitle";
import {Envelope} from "../../icons/icons";
import {Paragraph} from "../Typography/Typography";
import {FooterContent} from "../content";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;
const StyledParagraph = styled(Paragraph)`
	margin-top: 5px;
	margin-bottom: 0;
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
			<StyledParagraph text={FooterContent.email} onClick={goToMail}/>
			<StyledParagraph text={FooterContent.number} onClick={goToPhone}/>
		</Container>
	);
};

export default Communication;