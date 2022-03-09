import React from "react";
import styled from "styled-components";
import {footerContent} from "../../components/content";
import {Heading, Paragraph} from "../../components/Typography";

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
	className?: string;
	large?: boolean;
}

const AddressBlock = ({className, large}: AddressBlockProps) => {
	const {name, address, number, city, zipCode} = footerContent.office1;
	const goToMap = () => {
		window.open("https://www.google.com/maps/search/?api=1&query=Bytecode+Digital+Agency+B.V.");
	};

	return (
		<Container onClick={goToMap} className={className}>
			<Heading type={large ? "h3" : "h4"} text={"Office " + name} />
			<StyledParagraph text={address + " " + number + ", "} large={large} />
			<StyledParagraph text={zipCode + " " + city} large={large} />
		</Container>
	);
};

export default AddressBlock;