import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const contents = [
	{ role: "user", parts: [{ text: "What is the temperature in Brasil?" }] },
];

const response = await ai.models.generateContent({
	model: "gemini-3.6-flash",
	contents: contents,
	config: {
		tools: [
			{
				functionDeclarations: [
					{
						name: "getTodayDate",
						description: "Return the current date in the format YYYY-MM-DD",
					},
					{
						name: "getCountryTemperature",
						description: "return the temperature of a given country",
						parameters: {
							type: "OBJECT",
							properties: {
								country: {
									type: "STRING",
									description: "country name",
								},
								isCelsius: {
									type: "BOOELAN",
									description:
										"Should return temperature in Celcius or not (Standard is true)",
								},
							},
							required: ["country", "isCelsius"],
						},
					},
				],
			},
		],
	},
});

console.log(response.candidates[0].content.parts[0]);
// contents.push(response.candidates[0].content.parts);

// contents.push({
// 	role: "user",
// 	parts: [
// 		{
// 			functionResponse: {
// 				name: "getTodayDate",
// 				response: { result: "2026-04-01" },
// 			},
// 		},
// 	],
// });

// response = await ai.models.generateContent({
// 	model: "gemini-3.6-flash",
// 	contents: contents,
// });

// console.log(response.candidates[0].content);
