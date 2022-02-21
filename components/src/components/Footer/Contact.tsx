import React from "react";
import styled from "styled-components";
import {Heading} from "../Typography/Typography";
import Button from "../Button/Button";
import {LongArrow} from "../../icons/icons";
import Link from "next/link";
import {FooterContent} from "../content";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Title = styled(Heading)`
	margin-bottom: 15px;
`;

const Contact = () => {
	return (
		<Container>
			<Title type="h3" text={FooterContent.slogan}/>
			<Link href="/contact">
				<Button type="secondary" text="Let us know!" icon={LongArrow} />
			</Link>
		</Container>
	);
};

export default Contact;