# 🤖 AI Executive Secretary Agent

An intelligent AI Executive Secretary built with the **Google GenAI SDK** (`@google/genai`). 
This agent leverages function calling (tools) to manage calendar schedules, consult available dates, and handle email communications automatically through natural language interactions.

---

## ✨ Features

### 📅 Scheduling Capabilities
* **Consult Date:** Check current date/time, day of the week, and holiday calendars.
* **Consult Calendar:** Retrieve scheduled events, meetings, and free/busy time slots for a given day or range.
* **Schedule Appointment:** Create new calendar events with specific dates, times, descriptions, and attendees.
* **Reschedule Appointment:** Move existing meetings to new time slots or dates seamlessly.

### ✉️ Communication Capabilities
* **Consult Emails:** Fetch unread emails, search inbox messages, and retrieve email threads.
* **Send Email:** Draft and send emails to specified recipients with dynamic content.

---

## 🛠️ Prerequisites

* **Node.js:** v18.0.0 or higher
* **Google Gemini API Key:** Obtainable from [Google AI Studio](https://aistudio.google.com/)

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/pmarcosfelipe/secretary-agent](https://github.com/pmarcosfelipe/secretary-agent)
   cd secretary-agent