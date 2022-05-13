import React from "react";
import { NextPage } from "next";
import MainLayout from "../../layout/MainLayout";
import {
	CaseQuoteProps,
	CaseIntroProps,
	AboutProps,
	SummationBlockProps,
	ScreensAndTextProps,
	SingleCasePage,
} from "@bytecode/ui-library/sections";
import { UserPictureProps } from "@bytecode/ui-library/dist/components/UserPictures/UserPicture.types";

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

const intro: CaseIntroProps = {
	title: "Clear organisations and fair rewards",
	subtitle: "Styr",
	text: "A modern and practical tool for valuing and rewarding teams, roles and functions.",
	image: "airchip-header.png",
	logo: "airchip-logo.svg"
};
const about: AboutProps = {
	bullets: {
		expertises: [
			"CTO",
			"Development"
		],
		deliverables: [
			"MVP",
			"Strategic advice",
			"Product scope",
			"UIX design"
		]
	},
	text: {
		introduction: [
			"How do you determine how much value an employee creates? " +
			"How do you know if each layer of your organization has the right staffing and support?",

			"Over the years, STYR has developed a new way of job grading. " +
			"In the STYR-model, job grading is based on the problem-solving ability and talents of the employee or applicant. " +
			"The STYR team believes that their method of job grading is more honest than old and existing ones."
		],
		clientNeeds: [
			"When we first spoke to Annemarie, Elke & Jan-Kees, they had already created their innovative job grading model. " +
			"In their role as consultants, they used this model and helped companies with a ‘paper version’. " +
			"This worked for STYR and its clients, but it wasn’t very scalable, " +
			"and it was hard to adapt to changing roles and employees. This is why STYR wanted to create a digital application. " +
			"Through this application, HR managers can use this online environment to perform job grading. " +
			"The job grading process would become so much easier by doing so. And at the meantime, " +
			"it would create an overview of the different strategic layers and their utilization.",

			"The first big challenge in this project was to convert their model into an online format. " +
			"Even though Annemarie, Elke & Jan-Kees are the HR experts, it was difficult for them to convert their model into " +
			"a digital product that we could develop. " +
			"That is why we worked together to create a digital concept of their job grading model.",

			"When this phase was completed, we could start developing it. " +
			"Jeroen & Luciano (co-founders Bytecode) build the back-end, " +
			"while Christiaan (front-end & UIX magician) designed the application and build the front-end.",

			"Since then, many companies have joined STYR to use their model. " +
			"As you can see from their website, they have many wonderful and great clients who use " +
			"their method of job grading on a daily basis. After the launch, " +
			"we continued to optimize and improve the product with new features and a better UX."
		]
	}
};

const quote: CaseQuoteProps = {
	text: "Always appoint someone who takes the role of product owner upon him. " +
		"Even when working in a small team, there always has to be someone who stays in touch with the users, " +
		"and can advocate their needs to the rest of the team."
};

const challenges: SummationBlockProps = {
	title: "The Challenges",
	titleText: "While STYR already existed a couple of years before approaching us, " +
		"it still has a lot of characteristics of a software start-up. " +
		"A big challenge was to convert their model into a digital product as described, " +
		"but there were also some other issues:",
	summationText: [
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
	],
};

const features: ScreensAndTextProps[] = [
	{
		title: "Allocator",
		text: "As an HR manager, you can easily determine what pay scale a (new) employee should receive. " +
			"This corresponds with the skills and experience that are required for the job function. " +
			"By filling in a couple of questions, " +
			"the STYR-allocator can produce a pay scale that is ‘fair’ and ‘suitable’.",
		screenOne: "/images/iphone2.svg",
		screenTwo: "/images/iphone2.svg"
	},
	{
		title: "Job Matrix",
		text: "Who do you need to hire? An organization has a lot of layers. How many ‘manual workers’, " +
			"‘middle-managers’, and ‘top-managers’ are currently working in your organization? " +
			"The job matrix gives you a clear overview of the utilization rate of all layers within the organization.",
		screenOne: "/images/iphone2.svg",
		screenTwo: "/images/iphone2.svg"
	},
];

const members: UserPictureProps[] = [
	{
		person: "annemariegeysen",
		size: 120,
		color: "purple",
		shadowPosition: "top",
		balloonText: "My name is Annemarie Geysen and CONTENT HERE"
	},
	{
		person: "jankeesvanhasselt",
		size: 120,
		color: "lightGreen",
		shadowPosition: "bottom",
		balloonText: "Hello I'm Jan-Kees van Hasselt. and CONTENT HERE"
	},
	{
		person: "elkeschulting",
		size: 120,
		color: "darkGreen",
		shadowPosition: "top",
		balloonText: "Hello I'm Elke Schulting. more content here"
	}
];

const StyrBody = () => (
	<SingleCasePage
		intro={intro}
		about={about}
		quote={quote}
		challenges={challenges}
		features={features}
		members={members}
	/>
);

export default Styr;