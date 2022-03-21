import React from "react";
import {NextPage} from "next";
import MainLayout from "../../layout/MainLayout";
import {CaseIntro, CaseAbout, CaseQuote} from "@bytecode/ui-library/sections";
import {Heading, Paragraph} from "@bytecode/ui-library/components";
import styled from "styled-components";

const content = {
	title: "Airchip | Case",
	metaDescription: "Bytecode helps realize your dream applications"
};

const Airchip: NextPage = () => {
	return (
		<MainLayout content={content}>
			<AirchipBody />
		</MainLayout>
	);
};

const AboutTextContainer = styled.div`
	grid-area: text;
`;

const AboutText = () => (
	<AboutTextContainer>
		<Heading type="h2" text="How did it start?" />
		<Paragraph text="What do you wanna be when you grow up? ‘a fireman’, ‘a policemen’, ‘a pilot’, ‘a doctor’.
			It is difficult to make choices when you are young, especially ones who have a big influence on the
			rest of your life. How can you find out where your passion lies as a high school or college student?"
		/>
		<Paragraph text="Suzan Schouten, who is the sole founder of Youngpwr,
			has worked for a lot of publishers where children were the target group.
			Many young adults and students are unemployed and do not know where their passion lies.
			That is why Suzan wanted to create a platform where she could educate them to start their own business.
			Besides that, she wanted to connect them to projects or companies to gain experience.
			By doing so, they can explore where their interests and passions lie."
		/>
		<Heading type="h4" text="Client needs" />
		<Paragraph text="Suzan was already working on Youngpwr for over a year before we got in contact with her.
			She had already run a pilot in Noordwijk with some high school students.
			This showed some potential for Youngpwr and established traction."
		/>
		<Paragraph text="Suzan her skills were especially focused on PR & communication,
			and she knew the target group like the back of her hand.
			But building a digital platform was something entirely new for her.
			That is why Suzan needed not only a team that could develop the platform,
			but also someone willing to be a strategic partner.
			Of course, we wanted to help Suzan to realize her vision.
			But the first strategic choice to make was a difficult one. We were wondering what to build first.
			Should we focus on creating articles focused on becoming a freelancer?
			Or should we focus on making matches between students and companies with relevant projects?"
		/>
		<Paragraph text="We decided to first focus on creating articles that would give insights
			about how to start up your own business. When that was up and running,
			we would focus on making a better matching ‘algorithm’."
		/>
		<Paragraph text="Luciano (co-founder Bytecode) focused on creating a solid back-end,
			which would enable us to add more features in the future.
			While doing so, Christiaan (front-end developer & UIX designer)
			worked together with Suzan and a couple of designers from Youngpwr on the design.
			While Jeroen (co-founder Bytecode) helped Luciano & Chris,
			Suzan was mostly occupied with the overall marketing plan."
		/>
		<Paragraph text="When the platform came live, a lot of registrations occur,
			but the real breakthrough didn’t happen. While some students have been helped to
			explore their passion, and several projects have been performed by them,
			Youngpwr is still searching for the right product-market fit."
		/>
	</AboutTextContainer>
);

const AirchipBody = () => (
	<div>
		<CaseIntro
			title="Barman in your pants"
			subtitle="Airchip"
			text="No more queuing at a festival or event: order and pay via the Airchip app. Known from Dragons Den!"
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
		<CaseQuote text="Een quote van ongeveer 3 regels maximaal zodat het visueel netjes blijft" />
	</div>
);

export default Airchip;