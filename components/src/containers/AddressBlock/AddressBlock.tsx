import React from "react";
import styled from "styled-components";
import { footerContent, links } from "../../content/content";
import { Heading, Paragraph } from "../../components/Typography";
import { WithStyle } from "../../types/utils";

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

type AddressBlockProps = {
	large?: boolean;
}

const AddressBlock = ({ className, large }: WithStyle<AddressBlockProps>) => {
	const { name, address, number, city, zipCode } = footerContent.office1;
	const goToMap = () => {
		window.open(links.mapsQuery);
	};

	return (
		<Container onClick={goToMap} className={className}>
			<Heading type={large ? "h3" : "h4"} text={"Office " + name} />
			<StyledParagraph text={address + " " + number + ", "} size={large ? "large" : "normal"} />
			<StyledParagraph text={zipCode + " " + city} size={large ? "large" : "normal"}/>
		</Container>
	);
};

export default AddressBlock;