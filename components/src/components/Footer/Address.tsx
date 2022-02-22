import React from "react";
import styled from "styled-components";
import {FooterContent} from "../content";
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
		window.open("http://maps.google.com/?q=" + FooterContent.office1.address + FooterContent.office1.zipCode);
	};

	return (
		<Container onClick={goToMap}>
			<Heading type="h4" text={"Office " + FooterContent.office1.name} />
			<StyledParagraph text={FooterContent.office1.address}  />
			<StyledParagraph text={FooterContent.office1.zipCode} />
		</Container>
	);
};

export default Address;