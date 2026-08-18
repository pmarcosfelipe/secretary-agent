import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const contents = [{ role: "user", parts: [{ text: "que dia é hoje?" }] }];

let response = await ai.models.generateContent({
	model: "gemini-3.6-flash",
	contents: contents,
	config: {
		tools: [
			{
				functionDeclarations: [
					{
						name: "getTodayDate",
						description: "return the current date in the format YYYY-MM-DD",
						// parameters: { type: "object", properties: {}, required: [] },
					},
				],
			},
		],
	},
});

contents.push(response.candidates[0].content);

contents.push({
	role: "user",
	parts: [
		{
			functionResponse: {
				name: "getTodayDate",
				response: { result: "2026-04-01" },
			},
		},
	],
});

response = await ai.models.generateContent({
	model: "gemini-3.6-flash",
	contents: contents,
});

console.log(response.candidates[0].content);
