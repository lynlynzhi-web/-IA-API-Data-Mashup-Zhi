const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

app.post("/submit", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const response = await axios.post(
            "https://api.notion.com/v1/pages",
            {
                parent: { database_id: DATABASE_ID },
                properties: {
                    Name: {
                        title: [{ text: { content: name } }]
                    },
                    Email: {
                        email: email
                    },
                    Message: {
                        rich_text: [{ text: { content: message } }]
                    }
                }
            },
            {
                headers: {
                    "Authorization": `Bearer ${NOTION_TOKEN}`,
                    "Notion-Version": "2022-06-28",
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({ success: true, data: response.data });

    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ success: false, error: "Failed to send to Notion" });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});

