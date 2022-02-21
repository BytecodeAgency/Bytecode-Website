import React from "react";
import styled from "styled-components";
import {FooterContent} from "../content";
import {Heading, Paragraph} from "../Typography/Typography";

const Container = styled.div``;
const StyledParagraph = styled(Paragraph)`
	margin-top: 5px;
	margin-bottom: 0;
`;


const Address = () => {
	const goToMap = () => {
		window.open("http://maps.google.com/?q=" + FooterContent.office1.address + FooterContent.office1.zipCode);
	};

	return (
		<Container>
			<Heading type="h4" text={"Office " + FooterContent.office1.name}/>
			<StyledParagraph text={FooterContent.office1.address} onClick={goToMap} />
			<StyledParagraph text={FooterContent.office1.zipCode} onClick={goToMap} />
		</Container>
	);
};

export default Address;