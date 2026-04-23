## Track: 
Comtech

## Project Description
The project collects customer inquiries for Kitchen Wheel and stores them in Notion. 

## API Used
Link: https://www.notion.so/my-integrations

The Notion API is used to integrate the system with a Notion Database. This allows Notion to store, retrieve, and update lead information in real time. 

## Setup Instructions
1. Create a Notion Integration https://www.notion.so/my-integrations

2. Fill in the following:

    - **Name**: Kitchen Wheel Lead Form

    - **Associate workplace**: Your Workplace

    - **Type**: Internal

    - **Click Submit**

    - Copy the Internal Integration Secret 

3. Open the ‘.env’ file in the folder

    - Paste your Internal Integration Secret in NOTION_TOKEN=

4. Create a Notion Database

    - Open Notion and create a new database

    - Add the following properties in columns:

      - Name (Title)
      - Email (Email)
      - Message (Text)
5. Get your Database ID
      - Look at the URL (https://www.notion.so/xxxxxxxxxxxxxxxxxx?v=...)
      - Copy (xxxxxxxxxxxxx), this is your Database ID
      - Open your .env file
      - Paste it in NOTION_DATABASE_ID=
6. Share Database with Integration
      - Go to your Notion database
      - Click the three dots on the upper right corner
      - Click “Connections”
      - Search for “Kitchen Wheel Lead Form” and connect it
7. Open your terminal
      - Navigate to your project folder
          - Type cd “API Integration”
          - Type node server.js to start the server
          - Copy the local link shown in your terminal and paste it into your browser.

## Data Integration Explanation

The system serves as an extension for our final project, Kitchen Wheel, where customers inquiries are collected and stored in a Notion database using Notion API. 

The workflow begins on the frontend (HTML, CSS, and Javascript), where users interact with a form. The form collects essential information from the customer, including name, email address, and inquiry. Once the customer clicks the submit button, the data is structured in JSON format and sent to the backend server through an HTTP POST request.

On the backend, a Node.js server receives the request and uses the Notion API to create a new entry in the Notion database. The API requires an integration token stored in the .env file within the project folder, ensuring that only authorized requests can access the database. 

Once the data is successfully stored in the Notion database, the Notion API returns a response to the backend confirming that the entry has been created. The backend then sends a success response back to the frontend, where customers will see a “Sent successfully!” message displayed in the UI.

## Limitations

The limitation of this project is that it only stores new entries in the Notion database without assigning a status or providing an alert to indicate new submissions, making it difficult to distinguish between old and newly added entries.

Another limitation is that, although this system is designed as an extension for our final project, Kitchen Wheel, the system is not yet integrated with the main Kitchen Wheel system. 
 
## AI Disclosure

ChatGPT was used to assist in the development of parts of this project, mainly in writing server.js and script.js. However, I ensured that I fully understood how the code functions and how each part contributes to the overall API integration. On the other hand, HTML and CSS were mostly created on my own, with some help from AI for small improvements. 
