import React from "react";
import type { NextPage } from "next";
import { Container, InitialContainer, Spacer, Heading, Paragraph, ArrowLink } from "@bytecode/ui-library/components";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS, Employees, isWindowSizeBiggerThan } from "@bytecode/ui-library/utils";
import Image from "next/image";

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
	grid-column-gap: 40px;
	padding-left: 20px
`;

const CoFounderHeading = styled(Heading)`
	margin-bottom: 30px;
`;

const bytecodeAsCoFounderContainerResponsiveCSS = responsiveValuesCSS(
	"padding-left",
	"px",
	breakpointNameToPx({
		xl: 200
	})
);
const BytecodeAsCoFounderContainer = styled(Container)`
	${bytecodeAsCoFounderContainerResponsiveCSS};	
`;

const BytecodeAsCoFounder = () => (
	<BytecodeAsCoFounderContainer>
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
	</BytecodeAsCoFounderContainer>
);

const whoWeAreContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr"
		})
	);
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs: 40,
			lg: 100
		})
	);
	return gridColumns + paddingTop;
};

const WhoWeAreContainer = styled.div`
	${whoWeAreContainerResponsiveCSS};
	display: grid;
	grid-column-gap: 40px;
`;

const WhoWeAreTextContainer = styled.div`
	align-self: center;
	display: grid;
`;

const MeetTheTeamButton = styled(ArrowLink)`
	justify-self: end;
`;

const PicturesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	padding-bottom: 40px;
`;

const WhoWeAre = () => (
	<WhoWeAreContainer>
		<PicturesContainer>
			{
				Employees.map((employee, index) => (
					isWindowSizeBiggerThan("xxl")
						? <Image key={index} src={`/images/member-${employee}.png`} alt="profile picture" width={180} height={270} />
						: <Image key={index} src={`/images/member-${employee}.png`} alt="profile picture" width={150} height={225} />
				))
			}
		</PicturesContainer>
		<WhoWeAreTextContainer>
			<Heading type="h2" text="Who are we?" />
			<Paragraph text="We want to be your tech co-founder & CTO.
				Together with you, we build your start-up and digital product.
				Our core expertise is designing and programming your MVP.
				But before we develop anything, we work together with you to understand the ideal user experience and the user's goals.
				That enables us to create a product scope. With this input,
				we develop functionalities and work towards a first working version of your concept."
			/>
			<Paragraph text="To enhance our collaboration we often invest in the start-ups that we work with.
				This makes it more affordable to create an MVP and ensures you have a tech team for the long term."
			/>
			<MeetTheTeamButton
				text="Meet the team"
				link="/who-we-are"
			/>
		</WhoWeAreTextContainer>
	</WhoWeAreContainer>
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
