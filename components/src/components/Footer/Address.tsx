import React from "react";
import styled from "styled-components";
import {footerContent} from "../content";
import {Heading, Paragraph} from "../Typography/Typography";

const Container = styled.div`
	grid-area: address;
	&:hover{
		cursor: pointer;
	}
`;
const StyledParagraph = styled(Paragraph)`
	margin-top: 5px;
	margin-bottom: 0;
`;


const Address = () => {
	const goToMap = () => {
		window.open("http://maps.google.com/?q=" + footerContent.office1.address + footerContent.office1.zipCode);
	};

	return (
		<Container onClick={goToMap}>
			<Heading type="h4" text={"Office " + footerContent.office1.name} />
			<StyledParagraph text={footerContent.office1.address}  />
			<StyledParagraph text={footerContent.office1.zipCode} />
		</Container>
	);
};

export default Address;