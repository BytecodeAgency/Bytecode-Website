import React from "react";
import { NextPage } from "next";
import MainLayout from "../../layout/MainLayout";
import {
	CaseIntro,
	CaseAbout,
	CaseQuote,
	SummationBlock,
	SummationText,
	ScreensAndText,
	TeamMembers
} from "@bytecode/ui-library/sections";
import { Heading, Paragraph, Container } from "@bytecode/ui-library/components";
import styled from "styled-components";
import { breakpointNameToPx,  responsiveValuesCSS, theme } from "@bytecode/ui-library/utils";
import { layout, getEmployees } from "@bytecode/ui-library/utils";

const content = {
	title: "Youngpwr | Case",
	metaDescription: "Bytecode helps realize your dream applications"
};

const Youngpwr: NextPage = () => {
	return (
		<MainLayout content={content}>
			<YoungpwrBody />
		</MainLayout>
	);
};

const AboutTextContainer = styled.div`
	grid-area: text;
`;

const AboutText = () => (
	<AboutTextContainer>
		<Heading type="h2" text="How did it start?" />
		<Paragraph text="What do you want to be when you grow up? “A fireman”, “a policemen”, “a pilot”, “a doctor”.
			It is difficult to make choices when you are young, especially ones which have a big influence on the rest of your life.
			How can you find out where your passion lies as a high school or college student?"
		/>
		<Paragraph text="Suzan, the sole founder of Youngpwr, realized that many young adults or students are unemployed and unaware of their passion.
			She was motivated to start a platform where young people could learn about starting their own business or connect them to projects or companies to gain experience.
			In this way, they can explore their interests."
		/>
		<Heading type="h4" text="Client needs" />
		<Paragraph text="Before we started our collaboration with Youngpwr,
			Suzan had already finished a pilot with some high school students, which showed potential and established traction."
		/>
		<Paragraph text="Suzan was mainly skilled in PR and communication and knew her target group very well.
			Building a digital platform, however, was not something she had done before.
			We stepped in, not only as a development team but also as a strategic partner.
			We decided what the focus and order of feature development should be and started working."
		/>
		<Paragraph text="We decided to first focus on creating articles that would give insights into how to start your own business.
			When that was up and running, we would focus on making a better matching ‘algorithm’."
		/>
		<Paragraph text="Luciano, our co-founder, focused on creating a solid back-end, which would enable us to add more features in the future.
			Christiaan (front-end developer & UIX designer) worked with Suzan and designers from Youngpwr on the design.
			While Jeroen, our other co-founder, assisted Luciano and Christiaan, Suzan was mostly occupied with the overall marketing plan."
		/>
		<Paragraph text="When the platform launched, many young people signed up, but the real breakthrough didn’t happen.
			With students stimulated to explore their passions and some projects performed,
			Youngpwr is still searching for the right product-market fit." />
	</AboutTextContainer>
);

const summationText: SummationText[] = [
	{
		title: "Funding",
		text: "Suzan Schouten funded Youngpwr with her own resources together with an investment from us. " +
			"This was enough to get the project going, but we were looking for additional resources. " +
			"Unfortunately, loans were not assigned to us, and conversations with investors were stranded. " +
			"This made it difficult for us to get the budget to improve the product and promote Youngpwr."
	},
	{
		title: "Supply & demand",
		text: "As with any platform, it all came down to two sides: " +
			"students who were willing to work and companies (or individuals) who had an interesting project to work on. " +
			"Youngpwr struggled to attract companies to place a project on their platform. " +
			"A few hundred students registered, but this was not enough to make a real impact."
	},
	{
		title: "Focus",
		text: "Marketing, development, sales, accounting, partnerships, content creation… " +
			"A lot has to be done when working at a startup. But in hindsight, we were just lacking focus. " +
			"We divided our attention into too many different aspects. " +
			"Instead of doing that, we should have focused on 1 or 2 things, and gotten that right."
	}
];

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


const ScreensAndTextOne = () => (
	<ScreensAndTextOneContainer>
		<ScreensAndText
			title="Job board"
			text="Companies and individuals can place projects and internships on the platform.
				Registered students and young adults can apply to them.
				After a match, contact is directly between the company and the student."
			screenOne="/images/iphone2.svg"
			screenTwo="/images/iphone2.svg"
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

const ScreensAndTextTwo = () => (
	<ScreensAndTextTwoBackground>
		<ScreensAndTextTwoContainer>
			<ScreensAndText
				title="Articles, interviews, podcasts and webinars"
				text="We create and place content to help Youngpwrs start up their company and get the necassary info and help."
				screenOne="/images/iphone2.svg"
				screenTwo="/images/iphone2.svg"
			/>
		</ScreensAndTextTwoContainer>
	</ScreensAndTextTwoBackground>
);

const ScreensAndTextThree = () => (
	<ScreensAndTextOneContainer>
		<ScreensAndText
			title="Events"
			text="Youngpwr provides an overview of their organized or sponsored events. As a Youngpwr, you can attend them with a discount."
			screenOne="/images/iphone2.svg"
			screenTwo="/images/iphone2.svg"
		/>
	</ScreensAndTextOneContainer>
);

const YoungpwrBody = () => (
	<div>
		<CaseIntro
			title="Platform for young entrepreneurs"
			subtitle="Youngpwr"
			text="Supporting the development of students with signs of entrepreneurial behavior"
			image="airchip-header.png"
			logo="airchip-logo.svg"
		/>
		<CaseAbout
			expertises={[
				"CTO",
				"Development"
			]}
			deliverables={[
				"iOS application",
				"Android application",
				"CMS"
			]}
		><AboutText /></CaseAbout>
		<CaseQuote text="While working on Youngpwr we learned how important it is to not only have an amazing idea but also to really get to know your users." />
		<SummationBlock
			title="The challenges"
			titleText="tbd"
			summationText={summationText}
		/>
		<ScreensAndTextOne />
		<ScreensAndTextTwo />
		<ScreensAndTextThree />
		<TeamMembers members={getEmployees(["jeroen", "nick"])} />
	</div>
);

export default Youngpwr;