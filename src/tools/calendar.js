const calendar = {
	"2025-04-29": [
		{
			title: "Project Kickoff",
			date: "2025-04-29",
			time: "09:30",
			attendees: ["Alice Johnson", "Mark Smith"],
		},
	],
	"2025-04-30": [
		{
			title: "Team Standup",
			date: "2025-04-30",
			time: "10:00",
			attendees: [],
		},
	],
	"2025-05-01": [
		{
			title: "Launch Celebration",
			date: "2025-05-01",
			time: "18:30",
			attendees: ["Alice Johnson", "Emma Davis"],
		},
		{
			title: "Product Launch",
			date: "2025-05-01",
			time: "14:00",
			attendees: ["Alice Johnson", "Mark Smith", "Emma Davis"],
		},
	],
	"2025-05-02": [
		{
			title: "Design Review",
			date: "2025-05-02",
			time: "15:00",
			attendees: ["Mark Smith", "Emma Davis"],
		},
		{
			title: "Client Meeting",
			date: "2025-05-02",
			time: "11:30",
			attendees: ["David Brown"],
		},
	],
	"2025-05-03": [
		{
			title: "Marketing Workshop",
			date: "2025-05-03",
			time: "10:30",
			attendees: [],
		},
	],
	"2025-05-04": [
		{
			title: "Weekly Planning",
			date: "2025-05-04",
			time: "16:00",
			attendees: [],
		},
	],
};

const getTodayDate = {
	function: () => {
		return new Date();
	},
	declaration: {
		name: "getTodayDate",
		description: "Return the current date in the format YYYY-MM-DD",
	},
};

const getEvents = {
	function: ({ date }) => {
		return calendar[date] ?? [];
	},
	declaration: {
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
	},
};

const scheduleEvents = {
	function: ({ title, date, time, attendees }) => {
		const eventList = calendar[date] ?? [];

		eventList.push({ title, date, time, attendees });

		calendar[date] = eventList;

		return "Event successfully scheduled!";
	},
	declaration: {
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
	},
};

const rescheduleEvents = {
	function: () => {
		return new Date();
	},
	declaration: {
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
	},
};

const calendarFunctions = [
	getTodayDate,
	getEvents,
	scheduleEvents,
	rescheduleEvents,
];

export { calendarFunctions };
