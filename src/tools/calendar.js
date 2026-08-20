const getTodayDate = {
	name: "getTodayDate",
	description: "Return the current date in the format YYYY-MM-DD",
};

const getEvents = {
	name: "getEvents",
	description: "Return the calendar events for a specific date",
	parameters: {
		type: "OBJECT",
		properties: {
			date: {
				type: "STRING",
				description: "Date for events consulting, using format YYYY-MM-DD",
			},
		},
		required: ["date"],
	},
};

const scheduleEvents = {
	name: "scheduleEvents",
	description: "Schedule a new calendar event for a specific date",
	parameters: {
		type: "OBJECT",
		properties: {
			title: {
				type: "STRING",
				description: "Event title",
			},
			date: {
				type: "STRING",
				description: "Event date, using format YYYY-MM-DD",
			},
			time: {
				type: "STRING",
				description: "Event time, using format HH:MM",
			},
			attendees: {
				type: "ARRAY",
				description: "List of attendees for the event",
				items: {
					type: "STRING",
				},
			},
		},
		required: ["title", "date", "time"],
	},
};

const rescheduleEvents = {
	name: "rescheduleEvents",
	description: "Reschedule an existing calendar event for a specific date",
	parameters: {
		type: "OBJECT",
		properties: {
			title: {
				type: "STRING",
				description: "Event title",
			},
			date: {
				type: "STRING",
				description: "Event date, using format YYYY-MM-DD",
			},
			time: {
				type: "STRING",
				description: "Event time, using format HH:MM",
			},
			attendees: {
				type: "ARRAY",
				description: "List of attendees for the event",
				items: {
					type: "STRING",
				},
			},
		},
		required: ["title", "date", "time"],
	},
};

const calendarFunctions = [
	getTodayDate,
	getEvents,
	scheduleEvents,
	rescheduleEvents,
];

export { calendarFunctions };
