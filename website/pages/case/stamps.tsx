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
	DeviceTypes,
} from "@bytecode/ui-library/sections";
import { UserPictureProps } from "@bytecode/ui-library/dist/components/UserPictures/UserPicture.types";

const content = {
	title: "Stamps | Case",
	metaDescription: "Bytecode helps realize your dream applications"
};

const Stamps: NextPage = () => {
	return (
		<MainLayout content={content}>
			<StampsBody />
		</MainLayout>
	);
};

const intro: CaseIntroProps = {
	title: "Enabling people to share their medical or health journey",
	subtitle: "Stamps",
	text: "Write down how you are doing and keep everyone informed.",
	image: {
		type: DeviceTypes.iphone,
		url: "stamps__landingpage.svg",
	},
	color: "#FF7D58",
	logo: {
		url: "stamps__logo.svg",
		width: 280,
		height: 98,
	}
};
const about: AboutProps = {
	bullets: {
		expertises: [
			"CTO",
			"Tech co-founder",
			"Development"
		],
		deliverables: [
			"MVP",
			"Strategic advice",
			"UIX design",
			"Product scope",
			"Test plan"
		]
	},
	text: {
		introduction: [
			"Tess her mother Pien has been battling cancer for several years. " +
			"Pien has a large circle of family, friends, colleagues, and acquaintances. " +
			"But, when you are tackling a serious illness or have a difficult medical journey, " +
			"you don’t have the energy to inform your loved ones. " +
			"Phone calls, emails, postcards, surprise visits, texts, carrier pigeons, and smoke signals. " +
			"All these “communication channels” have to be maintained or answered. That is why Tess and " +
			"Pien wanted to create one central communication platform where “writers” can inform their loved ones about their process. ",
		],
		clientNeeds: [
			"Tess followed the UtrechtInc Students program. This helped her to start performing market and user research. " +
			"While collecting valuable input, she worked on creating a design with AdobeXD and a list of features. ",

			"Christiaan (UX / front-end developer) helped Tess to finish the design in Figma, " +
			"while we were discussing what features to build first. " +
			"After several strategic sessions, we agreed on what the minimum viable product was going to be. " +
			"In the weeks that followed we worked on creating a solid back-end and front-end. " +
			"We held 2 weekly sprints, including a demo. After 6 weeks, we started testing with users. " +
			"First to make sure everything is working as it should, and next to see if there is a product-market fit and revenue model. ",
		]
	}
};

const quote: CaseQuoteProps = {
	text: "Stamps taught us to really emphasize with users. Especially because of their difficult medical journeys."
};

const challenges: SummationBlockProps = {
	title: "The Challenges",
	titleText: "Stamps has and had its own challenges. " +
		"The startup and validation programme of UtrechtInc Students certainly helped, but we were faced with the following challenges:",
	summationText: [
		{
			title: "Create a MoSCoW LIST",
			text: "Tess and Pien had plenty of ideas for features that had to be included within the platform. " +
				"We found it difficult to make the right choices for the product scope of the MVP. " +
				"After several meetings and an extensive glance at the user flow, " +
				"we came up with a scope and backlog that we were all happy with."
		},
		{
			title: "Adobe XD → Figma",
			text: "Tess had already spent much time to make a design for Stamps, " +
				"and this time got even longer when her Adobe XD file had to be converted into a Figma file.nto Figma. " +
				"This took up quite some time."
		},
		{
			title: "Finding the right test users",
			text: "While developing an MVP, your main goal is to validate your assumptions. " +
				"But, patients are vulnerable and don’t have a lot of energy. " +
				"We found plenty of testers to test the functionalities, and that resulted in finding and solving some bugs. " +
				"That didn’t give us an answer regarding the question if there is a problem-solution fit, " +
				"because we wanted to see if Stamps created value for our target audience. " +
				"We are currently searching for new users who want to try the Stamps app."
		}
	],
};

const features: ScreensAndTextProps[] = [
	{
		title: "Create a journey",
		text: "People with a serious illness or difficult medical situation can create a journey to keep their network up-to-date. " +
			"You can place updates (with photos) to show your followers how you are doing. " +
			"This makes it much more convenient to communicate than having to reply through different channels. ",
		screenOne: "/images/stamps__journey.svg",
		screenTwo: "/images/stamps__writepost.svg"
	},
	{
		title: "Follow a journey and interact",
		text: "As a relative, friend, colleague, or neighbor you can follow the medical journey of the patient. " +
			"You can reply to their post, react with an emoticon, and send gifts!",
		screenOne: "/images/stamps__search.svg",
		screenTwo: "/images/stamps__invite.svg"
	},
	{
		title: "Send gifts",
		text: "Through Stamps you can directly send a postcard or present. The gifts that are being bought via " +
			"Stamps will make sure that you don’t forget to “send your love” and will help us to keep improving the app!",
		screenOne: "/images/stamps__choosetypegift.svg",
		screenTwo: "/images/stamps__choosegift.svg"
	},
];

const members: UserPictureProps[] = [
	{
		person: "tessvanlogtestijn",
		size: 120,
		color: "purple",
		shadowPosition: "top",
		balloonText: "My name is Tess and I studied psychology and economics."
	},
	{
		person: "pienvanlogtestijn",
		size: 120,
		color: "lightGreen",
		shadowPosition: "bottom",
		balloonText: "Hello I'm Pien. I'm a communication & marketing expert."
	}
];

const StampsBody= () => (
	<SingleCasePage
		intro={intro}
		about={about}
		quote={quote}
		challenges={challenges}
		features={features}
		members={members}
	/>
);

export default Stamps;