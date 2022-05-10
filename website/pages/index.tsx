import React from "react";
import type { NextPage } from "next";
import { InitialContainer } from "@bytecode/ui-library/components";
import MainLayout from "layout/MainLayout";
import { MeetTheFounders } from "@bytecode/ui-library/sections";

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
		<InitialContainer>
			page heading
		</InitialContainer>
		<MeetTheFounders />
	</div>

);

export default Home;
