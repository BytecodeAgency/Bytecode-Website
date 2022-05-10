import React from "react";
import type { NextPage } from "next";
import { PageIntro } from "@bytecode/ui-library/sections";
import MainLayout from "layout/MainLayout";
import { Container, InitialContainer, Spacer, Heading, Paragraph, ArrowLink, FullWidthContainer } from "@bytecode/ui-library/components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS, Employees, isWindowSizeBiggerThan, theme } from "@bytecode/ui-library/utils";
import Image from "next/image";
import { CollapsibleText } from "@bytecode/ui-library/containers";

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

const introContainerResponsiveCSS = responsiveValuesCSS(
	"background",
	"",
	breakpointNameToPx({
		lg: `url(${"/images/home-intro-line.svg"}) no-repeat right bottom content-box, ${theme.colors.colorBrand2}`
	})
);

const IntroContainer = styled(InitialContainer)`
	${introContainerResponsiveCSS};
	background-color: ${theme.colors.colorBrand2};
	padding-right: 0;
	padding-bottom: 40px;
	padding-top: 140px;
`;

const Intro = () => (
	<IntroContainer>
		<PageIntro
			title="Your startup partner for building software products"
			paragraph="There are many variations of passages of Lorem Ipsum available,
				but the majority have suffered alteration in some form, by injected humour,
				or randomised words which don't look even slightly believable. "
			image={
				<Image src="/images/home-intro.svg" alt="members of bytecode" height={564} width={601} />
			}
		/>
	</IntroContainer>
);

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

const howDoWeWannaContainerResponsiveCSS = () => {
	const background = responsiveValuesCSS(
		"background",
		"",
		breakpointNameToPx({
			xs: `url(${"/images/home-line2-mobile.svg"}) no-repeat left bottom , ${theme.colors.colorBrand4};`,
			lg: `url(${"/images/home-line2.svg"}) no-repeat left bottom, ${theme.colors.colorBrand4};`
		})
	);
	const backgroundSize = responsiveValuesCSS(
		"background-size",
		"",
		breakpointNameToPx({
			xs: "40%",
			lg: "auto auto",
		})
	);
	const minHeight = responsiveValuesCSS(
		"min-height",
		"px",
		breakpointNameToPx({
			xs: 600,
			lg: 700
		})
	);
	return background + backgroundSize + minHeight;
};
const HowDoWeWannaContainer = styled(FullWidthContainer)`
	${howDoWeWannaContainerResponsiveCSS};
`;

const howDoWeWannaContentContainerResponsiveCSS = () => {
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "40px 0 60px 0",
			lg: "200px 70px 200px 100px",
			xl: "200px 70px 200px 150px"
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr",
		})
	);
	return padding + gridColumns;
};

const HowDoWeWannaContentContainer = styled(Container)`
	${howDoWeWannaContentContainerResponsiveCSS};
	display: grid;
`;


const StyledHeading = styled(Heading)`
	margin-bottom: 40px;
`;

const CollapsibleTextContainer = styled.div`
	justify-self: center;
`;

const StyledCollapsibleText = styled(CollapsibleText)`
	margin-bottom: 30px;
`;

const HowDoWeWanna = () => (
	<HowDoWeWannaContainer>
		<HowDoWeWannaContentContainer>
			<StyledHeading type="h1" text="How do we wanna work together?" color="white" />
			<CollapsibleTextContainer>
				<StyledCollapsibleText
					title="As a team, no client-agency relationship"
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
				<StyledCollapsibleText
					title="Learning and improving on the way"
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
				<StyledCollapsibleText
					title="We want to work with passionate founders who want to 'scratch their own itch'"
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
			</CollapsibleTextContainer>
		</HowDoWeWannaContentContainer>
	</HowDoWeWannaContainer>
);

const HomeBody = () => (
	<div>
		<Intro />
		<WhoIsBytecode />
		<HowDoWeWanna />
	</div>
);

export default Home;
