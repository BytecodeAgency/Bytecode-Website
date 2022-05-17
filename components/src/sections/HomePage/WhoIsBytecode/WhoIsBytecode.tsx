import React from "react";
import styled from "styled-components";
import { breakpointNameToPx, Employees, isWindowSizeBiggerThan, responsiveValuesCSS } from "../../../index";
import { Heading, Paragraph, Container, Spacer, ArrowLink } from "../../../components";
import Image from "next/image";

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
		xl: 0
	})
);
const BytecodeAsCoFounderContainer = styled(Container)`
	${bytecodeAsCoFounderContainerResponsiveCSS};
`;

const BytecodeAsCoFounder = () => (
	<BytecodeAsCoFounderContainer>
		<StyledSpacer />
		<CoFounderTextContainer>
			<CoFounderHeading type="h2" text="Bytecode as tech co-founder &amp; CTO" />
			<Paragraph text="Many startup founders, like you, are trying to find the right technical partner to develop their MVP.
				However, finding one is a treasure hunt. Agencies are expensive, tech founders are rare and difficult to retain,
				and outsourcing is time-consuming. Besides, many “partners” are only in it for the money. But: here you are! You have found us.
				Bytecode is a technical partner and CTO for startups that invest in your startup (idea).
				We love to assist you through every stage of your journey with development, strategy, and design."
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
	margin-bottom: 40px;
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
		<WhoWeAreTextContainer>
			<Heading type="h2" text="Software experts with a passion for startups" />
			<Paragraph text="We understand that you want to have dedicated team members on who you can rely.
				We imagine that you don’t have the resources to hire a whole team and a CTO.
				That is why we would love to be your technical co-founder and CTO. We often invest in the startups we work with,
				to strengthen our collaboration and ease your financial stress!
				It makes MVP development more affordable and ensures you have a tech team that’s in it for the long run."
			/>
			<Paragraph text="Together, let's find out the ideal user experience
				and goals for your future customers and create your startup and digital product!"
			/>
			<MeetTheTeamButton
				text="Meet the team"
				link="/who-we-are"
			/>
		</WhoWeAreTextContainer>
		<PicturesContainer>
			{
				Employees.map((employee, index) => (
					isWindowSizeBiggerThan("xxl")
						? <Image key={index} src={`/images/member-${employee}.png`} alt="profile picture" width={180} height={270} />
						: <Image key={index} src={`/images/member-${employee}.png`} alt="profile picture" width={150} height={225} />
				))
			}
		</PicturesContainer>
	</WhoWeAreContainer>
);

const WhoIsBytecode = () => (
	<WhoIsBytecodeContainer>
		<BytecodeAsCoFounder />
		<WhoWeAre />
	</WhoIsBytecodeContainer>
);

export default WhoIsBytecode;