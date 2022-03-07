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
	const goToMap = () => {
		window.open("http://maps.google.com/?q=" + footerContent.office1.address + footerContent.office1.zipCode);
	};

	return (
		<Container onClick={goToMap} className={className}>
			<Heading type={large ? "h3" : "h4"} text={"Office " + footerContent.office1.name} />
			<StyledParagraph text={footerContent.office1.address} large />
			<StyledParagraph text={footerContent.office1.zipCode} large />
		</Container>
	);
};

export default AddressBlock;