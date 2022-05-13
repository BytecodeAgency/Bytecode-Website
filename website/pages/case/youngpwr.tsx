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

const intro: CaseIntroProps = {
	title: "Work(s) for your future",
	subtitle: "Youngpwr",
	text: "The first network that gives young people a kickstart as a young entrepreneur or employee",
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
			"iOS application",
			"Android application",
			"CMS"
		]
	},
	text: {
		introduction: [
			"What do you want to be when you grow up? “A fireman”, “a policemen”, “a pilot”, “a doctor”." +
			" It is difficult to make choices when you are young, especially ones which have a big influence on the rest of your life. " +
			"How can you find out where your passion lies as a high school or college student?",

			"Suzan, the sole founder of Youngpwr, realized that many young adults or students are unemployed and unaware of their passion. " +
			"She was motivated to start a platform where young people could learn about starting their own business " +
			"or connect them to projects or companies to gain experience. " +
			"In this way, they can explore their interests."
		],
		clientNeeds: [
			"Before we started our collaboration with Youngpwr, Suzan had already finished a pilot with some high school students, " +
			"which showed potential and established traction.",

			"Suzan was mainly skilled in PR and communication and knew her target group very well. Building a digital platform, however, " +
			"was not something she had done before. We stepped in, not only as a development team but also as a strategic partner. " +
			"We decided what the focus and order of feature development should be and started working.",

			"We decided to first focus on creating articles that would give insights into how to start your own business. " +
			"When that was up and running, we would focus on making a better matching ‘algorithm’.",

			"Luciano, our co-founder, focused on creating a solid back-end, which would enable us to add more features in the future. " +
			"Christiaan (front-end developer & UIX designer) worked with Suzan and designers from Youngpwr on the design. While Jeroen, our other co-founder, " +
			"assisted Luciano and Christiaan, Suzan was mostly occupied with the overall marketing plan.",

			"When the platform launched, many young people signed up, but the real breakthrough didn’t happen. " +
			"With students stimulated to explore their passions and some projects performed, " +
			"Youngpwr is still searching for the right product-market fit."
		]
	}
};

const quote: CaseQuoteProps = {
	text: "While working on Youngpwr we learned how important it is to not only have an amazing idea but also to really get to know your users."
};

const challenges: SummationBlockProps = {
	title: "The Challenges",
	titleText: "TBD",
	summationText: [
		{
			title: "Funding",
			text: "Suzan Schouten funded Youngpwr with her own resources together with an investment from us. " +
				"This was enough to get the project going, but we were looking for additional resources. " +
				"Unfortunately, loans were not assigned to us, and conversations with investors were stranded. " +
				"This made it difficult for us to get the budget to improve the product and promote Youngpwr."
		},
		{
			title: "Supply & Demand",
			text: "As with any platform, it all came down to two sides: students who were willing to work and companies " +
				"(or individuals) who had an interesting project to work on. " +
				"Youngpwr struggled to attract companies to place a project on their platform. " +
				"A few hundred students registered, but this was not enough to make a real impact."
		},
		{
			title: "Focus",
			text: "Marketing, development, sales, accounting, partnerships, content creation… A lot has to be done when working at a startup. " +
				"But in hindsight, we were just lacking focus. We divided our attention into too many different aspects. " +
				"Instead of doing that, we should have focused on 1 or 2 things, and gotten that right."
		}
	],
};

const features: ScreensAndTextProps[] = [
	{
		title: "Job board",
		text: "Companies and individuals can place projects and internships on the platform. " +
			"Registered students and young adults can apply to them. " +
			"After a match, contact is directly between the company and the student.",
		screenOne: "/images/iphone2.svg",
		screenTwo: "/images/iphone2.svg"
	},
	{
		title: "Articles, interviews, podcasts and webinars",
		text: "We create and place content to help Youngpwrs start up their company and get the necassary info and help.",
		screenOne: "/images/iphone2.svg",
		screenTwo: "/images/iphone2.svg"
	},
	{
		title: "Events",
		text: "Youngpwr provides an overview of their organized or sponsored events. As a Youngpwr, you can attend them with a discount.",
		screenOne: "/images/iphone2.svg",
		screenTwo: "/images/iphone2.svg"
	},
];

const members: UserPictureProps[] = [
	{
		person: "suzanschouten",
		size: 120,
		color: "purple",
		shadowPosition: "top",
		balloonText: "My name is Suzan Schouten  and CONTENT HERE"
	},
];

const YoungpwrBody= () => (
	<SingleCasePage
		intro={intro}
		about={about}
		quote={quote}
		challenges={challenges}
		features={features}
		members={members}
	/>
);

export default Youngpwr;