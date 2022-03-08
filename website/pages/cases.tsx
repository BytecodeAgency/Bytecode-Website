import React from "react";
import styled from "styled-components";
import {NextPage} from "next";
import MainLayout from "../layout/MainLayout";
import {InitialContainer} from "@bytecode/ui-library/components";
import {PageIntro} from "@bytecode/ui-library/sections";

const content = {
	title: "Cases of Bytecode",
	metaDescription:  "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Cases: NextPage = () => (
	<MainLayout content={content}>
		<CasesBody />
	</MainLayout>
);

const Intro = () => (
	<InitialContainer>
		<PageIntro
			subtitle="Our cases"
			title="An overview of the projects we've worked on."
			paragraph="Here you can read more about the start-up projects we have worked on,
            scroll between the different projects, and learn about other peoples their start-up journeys.
            Focus on how we have helped start-ups to build and validate their idea.
            Or just be inspired by their ideas and solutions."
		/>
	</InitialContainer>
);

const CasesOverview = () => (
	<div>
        Cases overview
	</div>
);

const CasesBody = () => (
	<div>
		<Intro />
		<CasesOverview />
	</div>
);


export default Cases;