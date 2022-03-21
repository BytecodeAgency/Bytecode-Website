import {Member} from "../containers";
import {EmployeeName} from "./contentGenerics";

// list of all employees
export const employees: Member[] = [
	{
		name: "Jeroen van Steijn",
		jobTitle: "Co-Founder & Developer",
		id: "jeroen",
		about: "Hi I am Jeroen, I am a co-founder of Bytecode and work as a full-stack developer. " +
			"My colleagues describe me as sincere and kindhearted. " +
			"My interests lie within politics and tech trends. " +
			"In my spare time I am either playing soccer, video games or padel with Nick and Chris.",
		focus: ["Development", "Back-end", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "tiko@bytecode.nl",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Nick Broekarts",
		jobTitle: "Sales & Marketing",
		id: "nick",
		about: "Hi I am Nick, I am responsible for marketing and sales. " +
			"Besides that, I help start-ups with their strategy and roadmap. " +
			"My colleagues describe me as social and enthusiastic. " +
			"When I am not working, I am mostly busy doing volunteer work (teaching what the Bible learns and supporting people). " +
			"Besides that, I love to have dinner with friends or play sports.",
		focus: ["Sales", "Marketing", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Christiaan Färber",
		jobTitle: "Developer & UX",
		id: "chris",
		about: "Hi I am Chris, I am a front-end developer and User Experience designer. " +
			"My colleagues describe me as a go-getter with a big heart. " +
			"My interest lie within finding good wines and philosophy. " +
			"During my days off, I love to play with my cat Nietzsche and go to techno parties.",
		focus: ["Development", "User Experience Design", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "T'iko Alarcón Rivero",
		jobTitle: "Developer",
		id: "tiko",
		about: "Hi I am Tiko, I am a front-end developer. I’m currently in my final year of IT at the Hague University of Applied Sciences, " +
			"where I’m currently busy founding my own startup company with a good friend of mine. I love solving puzzles, coding and design. " +
			"In my free time I go for hikes and ride my roadbike through the dunes.",
		focus: ["Development"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Suzanne de Vries",
		jobTitle: "Marketing",
		id: "suzanne",
		about: "TEXT STILL TO COME",
		focus: ["Marketing"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	}
];

export const getEmployee = (name: EmployeeName): Member | undefined => (
	employees.find(employee=>employee.id === name)
);

export const footerContent = {
	slogan: "What is your challenge or startup idea?",
	email: "hello@bytecode.nl",
	number: "015-2024222",
	office1: {
		name: "The Hague",
		address: "Wilhelmina van Pruisenweg",
		number: "35",
		zipCode: "2595 AN",
		city: "Den Haag",
	},
};

// Object with all links
export const links = {
	linkedin: "https://www.linkedin.com/company/bytecodeagency",
	instagram: "https://www.instagram.com/bytecodeagency/",
	youtube:"https://www.youtube.com/channel/UCpEk0LkS3lo7_Rzf8I2aEeg",
	termsAndConditions: "https://cdn.bytecode.nl/algemene-voorwaarden.pdf",
	privacyPolicy: "/legal/privacy-policy",
	cookiePolicy: "/legal/cookie-policy",
	meetingPlanner: "https://calendly.com/nickbroekarts-bytecode",
	mapsQuery: "https://www.google.com/maps/search/?api=1&query=Bytecode+Digital+Agency+B.V.",
	publicTransportRoute: "https://www.google.com/maps/dir/?api=1&destination=Bytecode+Digital+Agency+B.V.&travelmode=transit",
	autoRoute: "https://www.google.com/maps/dir/?api=1&destination=Bytecode+Digital+Agency+B.V."
};

export type Case = {
	name: string;
	subtitle: string;
} // TODO: add more data for single case pages??

export const cases: Case[] = [
	{
		name: "airchip",
		subtitle: "No more queuing for a drink!"
	},
	{
		name: "dearly",
		subtitle: "Support for the loss of your loved one(s)"
	},
	{
		name: "treats",
		subtitle: "Discover tasty, healthy and ethical restaurants matching your food preferences and principles!"
	},
	{
		name: "dawny",
		subtitle: "Sleeptracking for healthy aging"
	},
	{
		name: "styr",
		subtitle: "Clear organisations and fair rewards"
	},
	{
		name: "stamps",
		subtitle: "..."
	}
];



