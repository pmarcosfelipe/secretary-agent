import { GoogleGenAI } from "@google/genai";
import { calendarFunctions } from "./tools/calendar.js";
import { emailFunctions } from "./tools/email.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const allFunctions = [...calendarFunctions, ...emailFunctions];

const contents = [
	{
		role: "user",
		parts: [
			{
				text: "Schedule a new appointment to 12/12/2027 at 22pm called HELLO WORLD",
			},
		],
	},
];

const response = await ai.models.generateContent({
	model: "gemini-3.6-flash",
	contents: contents,
	config: {
		tools: [{ functionDeclarations: allFunctions }],
	},
});

console.log(response.candidates[0].content.parts[0]);
