import React from "react";
import { MainLayoutInterface } from "./Layout.types";
import Head from "next/head";
import { GlobalStyles, Menu, Footer } from "@bytecode/components";
import Link from "next/link";

const navLinksHref = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Service",
		href: "/"
	},
	{
		name: "Team",
		href: "/who-we-are"
	},
	{
		name: "Our cases",
		href: "/"
	},
	{
		name: "Contact",
		href: "/"
	},
];

const navLinks = navLinksHref.map((item) => ({
	name: item.name,
	Link: () => (<Link href={item.href}>{item.name}</Link>)
}));

const MainLayout: React.FC<MainLayoutInterface> = ({ children, content }) => {
	return (
		<>
			<Head>
				<title>{content.title}</title>
				<meta property="og:title" content={content.title} key="title" />
				<meta name="description" content={content.metaDescription} />
			</Head>
			<GlobalStyles />
			<Menu navLinks={navLinks} />
			<main>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default MainLayout;