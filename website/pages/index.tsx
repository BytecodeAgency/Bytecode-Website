import React from "react";
import type { NextPage } from "next";
import { Button, InitialContainer } from "@bytecode/components";
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
	<InitialContainer>
		<Button>Hi</Button>
	</InitialContainer>
);

export default Home;
