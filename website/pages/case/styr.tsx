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
	title: "Styr | Case",
	metaDescription: "Bytecode helps realize your dream applications"
};

const Styr: NextPage = () => {
	return (
		<MainLayout content={content}>
			<StyrBody />
		</MainLayout>
	);
};

const AboutTextContainer = styled.div`
	grid-area: text;
`;

const AboutText = () => (
	<AboutTextContainer>
		<Heading type="h2" text="How did it start?" />
		<Paragraph text="How do you determine how much value an employee creates?
			How do you know if each layer of your organization has the right staffing and support?"
		/>
		<Paragraph text="Over the years, STYR has developed a new way of job grading.
			In the STYR-model, job grading is based on the problem-solving ability and talents of the employee or applicant.
			The STYR team believes that their method of job grading is more honest than old and existing ones."
		/>
		<Heading type="h4" text="Client needs" />
		<Paragraph text="When we first spoke to Annemarie, Elke & Jan-Kees, they had already created their innovative job grading model.
			In their role as consultants, they used this model and helped companies with a ‘paper version’.
			This worked for STYR and its clients, but it wasn’t very scalable, and it was hard to adapt to changing roles and employees.
			This is why STYR wanted to create a digital application. Through this application, HR managers can use this online environment to perform job grading.
			The job grading process would become so much easier by doing so.
			And at the meantime, it would create an overview of the different strategic layers and their utilization."
		/>
		<Paragraph text="The first big challenge in this project was to convert their model into an online format.
			Even though Annemarie, Elke & Jan-Kees are the HR experts, it was difficult for them to convert their model into a digital product that we could develop.
			That is why we worked together to create a digital concept of their job grading model."
		/>
		<Paragraph text="When this phase was completed, we could start developing it.
			Jeroen & Luciano (co-founders Bytecode) build the back-end,
			while Christiaan (front-end & UIX magician) designed the application and build the front-end."
		/>
		<Paragraph text="Since then, many companies have joined STYR to use their model.
			As you can see from their website, they have many wonderful and great clients who use their method of job grading on a daily basis.
			After the launch, we continued to optimize and improve the product with new features and a better UX."
		/>
	</AboutTextContainer>
);

const summationText: SummationText[] = [
	{
		title: "No previous experience with IT development",
		text: "None of the STYR team members had built a software product before. " +
			"Of course, we did not expect them to develop the product themselves, but there still was some work to do that we couldn’t perform for them. " +
			"We advised them to appoint someone who would be our regular contact person. This person would be the so-called product owner. " +
			"The product owner would be responsible for identifying the user's needs. " +
			"We would then help convert these specific needs into product features."
	},
	{
		title: "User experience",
		text: "It is crucial for STYR and its users that the STYR model is easy to use and understand. " +
			"If we wanted to be able to scale, then training sessions should be additional but not a requirement for users. " +
			"We really had to focus on the needs of HR managers. What do they need? How are they going to use STYR? " +
			"Is our product logical? We have tested STYR with many users and made several UX improvements to increase its usability."
	},
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
			title="Allocator"
			text="As an HR manager, you can easily determine what pay scale a (new) employee should receive.
				This corresponds with the skills and experience that are required for the job function.
				By filling in a couple of questions, the STYR-allocator can produce a pay scale that is ‘fair’ and ‘suitable’."
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
				title="Job Matrix"
				text="Who do you need to hire? An organization has a lot of layers.
					How many ‘manual workers’, ‘middle-managers’, and ‘top-managers’ are currently working in your organization?
					The job matrix gives you a clear overview of the utilization rate of all layers within the organization."
				screenOne="/images/iphone2.svg"
				screenTwo="/images/iphone2.svg"
			/>
		</ScreensAndTextTwoContainer>
	</ScreensAndTextTwoBackground>
);

const StyrBody = () => (
	<div>
		<CaseIntro
			title="Automation for consultancy"
			subtitle="Styr"
			text="By digitizing styrs job evaluation model we have automated work for their consultants. Now they can focus on their real passion."
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
		<CaseQuote text="Always appoint someone who takes the role of product owner upon him. Even when working in a small team, there always has to be someone who stays in touch with the users, and can advocate their needs to the rest of the team." />
		<SummationBlock
			title="The challenges"
			titleText="While STYR already existed a couple of years before approaching us, it still has a lot of characteristics of a software start-up.
				A big challenge was to convert their model into a digital product as described, but there were also some other issues:"
			summationText={summationText}
		/>
		<ScreensAndTextOne />
		<ScreensAndTextTwo />
		<TeamMembers members={getEmployees(["jeroen", "nick"])} />
	</div>
);

export default Styr;