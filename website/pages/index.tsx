import React from "react";
import type { NextPage } from "next";
import { MeetTheFounders, Intro, WhoIsBytecode, WorkingTogether, OurProcess } from "@bytecode/ui-library/home-page";
import { FrequentlyAskedQuestions } from "@bytecode/ui-library/sections";
import MainLayout from "layout/MainLayout";

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

const HomeBody = () => (
	<div>
		<Intro />
		<WhoIsBytecode />
		<WorkingTogether />
		<OurProcess />
		<MeetTheFounders />
		<FrequentlyAskedQuestions />
	</div>
);

export default Home;
