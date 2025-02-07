interface Experience {
	company: string;
	position: string;
	duration: string;
	responsibilities: string[];
}

export const experiences: Experience[] = [
	{
		company: "Eduflix Limited",
		position: "Frontend Developer Intern",
		duration: "2022 – 2023",
		responsibilities: [
			"Developed the UI for an e-learning app using React, which was successfully launched within a year.",
			"Collaborated with a mentor to enhance the e-Voting platform for IBBU Lapai, improving UI efficiency and user experience by 50%.",
			"Co-engineered an intuitive voting platform for IBBU, leading to a record-breaking 120%+ student turnout during the 2023 elections.",
		],
	},
	{
		company: "Silex",
		position: "Frontend Developer (Contract)",
		duration: "2023 – 2024",
		responsibilities: [
			"Integrated the Crane Search API with a React frontend to facilitate flight ticket booking for Arik airline, projected to increase ticket bookings and revenue by over 40%.",
			"Revamped the UI of the NG Eagle flight booking component for better responsiveness and mobile compatibility, increasing mobile traffic by about 70%.",
		],
	},
	{
		company: "Freelancing",
		position: "Frontend Developer",
		duration: "2022 – Present",
		responsibilities: [
			"Designed multiple responsive websites for clients, leading to a 30-50% increase in sales.",
			"Resolved frontend bugs and improved UI responsiveness for client websites, saving them significant revenue and resources.",
			"Developed a chatbot using Botpress and OpenAI's NLP model for a BSc thesis, reducing customer query response time by over 250% compared to the case study company's FAQ page.",
		],
	},
];
