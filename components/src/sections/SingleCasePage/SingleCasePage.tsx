import React from "react";
import styled from "styled-components";
import { Heading, Paragraph, Container, UserPicture } from "../../components";
import {
	CaseAbout,
	CaseIntro,
	CaseQuote,
	ScreensAndText,
	SummationBlock,
	SingleCasePageContent, AboutTextProps, ScreensAndTextProps,
} from "../index";
import { breakpointNameToPx, layout, responsiveValuesCSS, theme } from "../../index";
import { CaseTeamMembers } from "../../containers";

const screensAndTextOneContainerResponsiveCSS = () => {
	const paddingTopAndBottom = breakpointNameToPx({
		xs: 60,
		lg: 90,
		xl: 150,
		xxl: 200
	});
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		paddingTopAndBottom
	);
	const paddingBottom = responsiveValuesCSS(
		"padding-bottom",
		"px",
		paddingTopAndBottom
	);
	const paddingLeft = responsiveValuesCSS(
		"padding-left",
		"px",
		breakpointNameToPx({
			...layout.container.margin,
			xl: 120,
			xxl: 200
		})
	);
	const backgroundSize = responsiveValuesCSS(
		"background-size",
		"",
		breakpointNameToPx({
			xs: "60% auto",
			md: "50% auto",
			lg: "40% auto"
		})
	);
	return paddingLeft + paddingBottom + paddingTop + backgroundSize;
};

const ScreensAndTextOneContainer = styled.div`
	${screensAndTextOneContainerResponsiveCSS};
	background: url(${"/images/case-airchip-line1.svg"}) no-repeat left top, url(${"/images/case-airchip-line2.svg"}) no-repeat right bottom, ${theme.colors.colorBrand2};
	display: grid;
	justify-items: flex-start;
`;


const ScreensAndTextOne = ({ title, text, screenOne, screenTwo }: ScreensAndTextProps) => (
	<ScreensAndTextOneContainer>
		<ScreensAndText
			title={title}
			text={text}
			screenOne={screenOne}
			screenTwo={screenTwo}
		/>
	</ScreensAndTextOneContainer>
);

const screensAndTextTwoBackgrounResponsiveCSS = () => {
	const background = responsiveValuesCSS(
		"background",
		"",
		breakpointNameToPx({
			lg: `url(${"/images/case-airchip-line3.svg"}) no-repeat bottom left`
		})
	);
	const backgroundSize = responsiveValuesCSS(
		"background-size",
		"",
		breakpointNameToPx({
			lg: "30% auto",
			xxl: "auto"
		})
	);
	return background + backgroundSize;
};

const ScreensAndTextTwoBackground = styled.div`
	${screensAndTextTwoBackgrounResponsiveCSS};
`;

const screensAndTextTwoContainerResponsiveCSS = () => {
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs: 60,
			md: 90,
			xl: 150,
			xxl: 200
		})
	);
	const paddingBottom = responsiveValuesCSS(
		"padding-bottom",
		"px",
		breakpointNameToPx({
			xs: 60,
			md: 90,
			xl: 150,
			xxl: 200
		})
	);
	const paddingRight = responsiveValuesCSS(
		"padding-right",
		"px",
		breakpointNameToPx({
			...layout.container.margin,
			xl: 120,
			xxl: 200
		})
	);


	return paddingRight + paddingBottom + paddingTop;
};

const ScreensAndTextTwoContainer = styled(Container)`
	${screensAndTextTwoContainerResponsiveCSS};
	display: grid;
	justify-items: center;
	background-origin: border-box;
`;

const ScreensAndTextTwo = ({ title, text, screenOne, screenTwo }: ScreensAndTextProps) => (
	<ScreensAndTextTwoBackground>
		<ScreensAndTextTwoContainer>
			<ScreensAndText
				title={title}
				text={text}
				screenOne={screenOne}
				screenTwo={screenTwo}
			/>
		</ScreensAndTextTwoContainer>
	</ScreensAndTextTwoBackground>
);

const AboutTextContainer = styled.div`
	grid-area: text;
`;

const AboutText = ({ introduction, clientNeeds }: AboutTextProps) => (
	<AboutTextContainer>
		<Heading type="h2" text="How did it start?" />
		{
			introduction.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
		}
		<Heading type="h4" text="Client needs" />
		{
			clientNeeds.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
		}
	</AboutTextContainer>
);

const SingleCasePage: React.FC<SingleCasePageContent> = ({ intro, about, quote, challenges, features, members }) => (
	<div>
		<CaseIntro
			title={intro.title}
			subtitle={intro.subtitle}
			text={intro.text}
			image={intro.image}
			logo={intro.logo}
			color={intro.color}
		/>
		<CaseAbout
			expertises={about.bullets.expertises}
			deliverables={about.bullets.deliverables}
		><AboutText introduction={about.text.introduction} clientNeeds={about.text.clientNeeds} /></CaseAbout>
		<CaseQuote text={quote.text} />
		<SummationBlock
			title={challenges.title}
			titleText={challenges.titleText}
			summationText={challenges.summationText}
		/>
		{
			features.map((feature, index) => {
				const { title, text, screenOne, screenTwo } = feature;
				if (index % 2 == 0 || index == 0) {
					return (
						<ScreensAndTextOne title={title} text={text} screenOne={screenOne} screenTwo={screenTwo} />
					);
				} else {
					return (
						<ScreensAndTextTwo title={title} text={text} screenOne={screenOne} screenTwo={screenTwo} />
					);
				}
			})
		}
		<CaseTeamMembers>
			{
				members.map(member =>
					<UserPicture
						key={member.person}
						size={member.size}
						color={member.color}
						shadowPosition={member.shadowPosition}
						person={member.person}
						balloonText={member.balloonText}
					/>
				)
			}
		</CaseTeamMembers>
	</div>
);

export default SingleCasePage;