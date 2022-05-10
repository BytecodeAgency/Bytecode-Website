import { Member } from "../containers";
import { EmployeeName } from "./contentGenerics";


// list of all employees
export const employees: Member[] = [
	{
		name: "Jeroen van Steijn",
		jobTitle: "Co-Founder & Developer",
		id: "jeroen",
		about: "Hi, I am Jeroen. I am a co-founder of Bytecode and work mainly as a full-stack developer. My colleagues describe me as sincere and kindhearted. I am a very broadly oriented person with interest in politics, technology, media, (motor) sports and much more. In my spare time, I am either playing soccer, video games such as League of Legends with T’iko, or padel with Nick and Chris.",
		focus: ["Development", "Back-end", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "tiko@bytecode.nl",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Nick Broekarts",
		jobTitle: "Sales & Marketing",
		id: "nick",
		about: "Hi, I am Nick. I am responsible for marketing and sales. Besides that, I help startups with their strategy and roadmap. My colleagues describe me as social and enthusiastic. When I am not working, I am mostly busy doing volunteer work (teaching what the Bible learns and supporting people). Besides that, I love to have dinner with friends or play sports.",
		focus: ["Sales", "Marketing", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Christiaan Färber",
		jobTitle: "Developer & UX",
		id: "chris",
		about: "Hi, I am Chris. I am a front-end developer and User Experience designer. My colleagues describe me as a go-getter with a big heart. My interest lies in finding good wines and philosophy. During my days off, I love to play with my cat Nietzsche and go to techno parties.",
		focus: ["Development", "User Experience Design", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "T'iko Alarcón Rivero",
		jobTitle: "Developer",
		id: "tiko",
		about: "Hi, I am T’iko. I am a front-end developer. My colleagues describe me as skilled and a bit nerdy. That is because I love to play video games, especially League of Legends. I am in the final year of my education in computer science, and in my spare time, I play with my three longhaired cats.",
		focus: ["Development"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Suzanne de Vries",
		jobTitle: "Marketing",
		id: "suzanne",
		about: "Hi, I am Suzanne. I am responsible for marketing/communication and sales. My colleagues describe me as cheerful and caring. My interests lie with psychology, dancing and singing, and I am a huge animal lover.",
		focus: ["Marketing"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Nietsche the cat",
		jobTitle: "Sleeping & cuddling",
		id: "nietzsche",
		about: "TEXT STILL TO COME",
		focus: ["Sleeping, playing, eating and cuddles"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	}
];

export const getEmployee = (name: EmployeeName): Member | undefined => (
	employees.find(employee => employee.id === name)
);

export const getEmployees = (names: EmployeeName[]): Member[] => {
	const employeeList: Member[] = [];
	names.forEach(name => {
		const employee = getEmployee(name);
		if (employee !== undefined) {
			employeeList.push(employee);
		}
	});
	return employeeList;
};

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
	youtube: "https://www.youtube.com/channel/UCpEk0LkS3lo7_Rzf8I2aEeg",
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



