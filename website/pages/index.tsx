import React from "react";
import type { NextPage } from "next";
import { Container, InitialContainer, Spacer, Heading, Paragraph } from "@bytecode/ui-library/components";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "@bytecode/ui-library/utils";

const content = {
	title: "Bytecode",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Home: NextPage = () => {
	return (
		<MainLayout content={content}>
			<HomeBody />
		</MainLayout>
	);
};

const WhoIsBytecodeContainer = styled(Container)`
	padding-top: 40px;
	padding-bottom: 40px;
`;

const styledSpacerResponsiveCSS = responsiveValuesCSS(
	"width",
	"%",
	breakpointNameToPx({
		xs: 100,
		lg: 60,
	})
);
const StyledSpacer = styled(Spacer)`
	${styledSpacerResponsiveCSS};
	margin-bottom: 30px;
`;

const coFounderTextContainerResponsiveCSS = responsiveValuesCSS(
	"grid-template-columns",
	"",
	breakpointNameToPx({
		xs: "1fr",
		lg: "1fr 1fr"
	})
);
const CoFounderTextContainer = styled.div`
	${coFounderTextContainerResponsiveCSS};
	display: grid;
`;

const CoFounderHeading = styled(Heading)`
	margin-bottom: 30px;
`;

const BytecodeAsCoFounder = () => (
	<Container>
		<StyledSpacer color="black" />
		<CoFounderTextContainer>
			<CoFounderHeading type="h2" text="Bytecode as tech co-founder & CTO" />
			<Paragraph text="How do you create a software product with no software skills or knowledge?
				What features do you integrate, and how do you test them?
				Many tech start-up founders like you are trying to find the right tech person to develop their MVP.
				But finding one is a treasure hunt. Outsourcing is time-consuming, agencies are expensive,
				and tech founders are rare and difficult to retain. Besides, outsourcing companies and agencies like your money,
				but aren’t always interested in your idea or the success."
			/>
		</CoFounderTextContainer>

	</Container>
);
const WhoWeAre = () => (
	<div>
		who are we?
	</div>
);

const WhoIsBytecode = () => (
	<WhoIsBytecodeContainer>
		<BytecodeAsCoFounder />
		<WhoWeAre />
	</WhoIsBytecodeContainer>
);

const HomeBody = () => (
	<div>
		<InitialContainer>
			heading of page
		</InitialContainer>
		<WhoIsBytecode />
	</div>
);

export default Home;
