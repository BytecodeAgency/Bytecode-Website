import React from "react";
import styled from "styled-components";
import { Heading } from "../../../components/Typography";
import Button from "../../../components/Button";
import { LongArrow } from "../../../icons";
import Link from "next/link";
import { footerContent } from "../../../content";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers/responsiveCss";


const containerResponsiveCSS = responsiveValuesCSS(
	"max-width",
	"px",
	breakpointNameToPx({
		lg: 370,
	})
);

const Container = styled.div`
	${containerResponsiveCSS};
	grid-area: contact;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;
const Title = styled(Heading)`
	margin-bottom: 15px;
`;

const Contact = () => {
	return (
		<Container>
			<Title type="h3" text={footerContent.slogan}/>
			<Link href="/contact">
				<Button type="secondary" text="Let us know!" icon={LongArrow} />
			</Link>
		</Container>
	);
};

export default Contact;