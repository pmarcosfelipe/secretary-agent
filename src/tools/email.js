const getEmails = {
	name: "getEmails",
	description: "Return the emails",
};

const sendEmail = {
	name: "sendEmail",
	description: "Send email for a contact",
	parameters: {
		type: "OBJECT",
		properties: {
			contact: {
				type: "STRING",
				description: "Contact to send email",
			},
			message: {
				type: "STRING",
				description: "Email message",
			},
		},
		required: ["contact", "message"],
	},
};

const emailFunctions = [getEmails, sendEmail];

export { emailFunctions };
