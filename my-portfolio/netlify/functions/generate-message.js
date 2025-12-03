const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event, context) => {
    // 1. Handle CORS Preflight and Headers
    const headers = {
        "Access-Control-Allow-Origin": "*", // Allow all origins (or restrict to your domain)
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
    };

    // Handle Preflight (OPTIONS)
    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 200, headers, body: "" };
    }

    // 2. Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, headers, body: "Method Not Allowed" };
    }

    // 3. Check for API Key
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
        console.error("Missing GEMINI_API_KEY environment variable");
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Server configuration error: Missing API Key" }),
        };
    }

    try {
        // 4. Parse Request Body
        const { summary, name, subject } = JSON.parse(event.body);

        if (!summary) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "Summary is required" }),
            };
        }

        // 5. Initialize Gemini
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // 6. Construct Prompt
        const prompt = `
      You are a professional email writing assistant.
      
      Context:
      - Sender Name: ${name || "[My Name]"}
      - Subject: ${subject || "Inquiry"}
      - User's Rough Summary: "${summary}"
      
      Task:
      Write a polite, professional, and concise email body based on the summary above.
      Do not include the subject line in the output.
      Do not include placeholders like "[Your Name]" if the name was provided.
      Keep the tone professional but approachable.
    `;

        // 7. Generate Content
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // 8. Return Result
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: text }),
        };

    } catch (error) {
        console.error("Error generating content:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: "Failed to generate message",
                details: error.message || error.toString()
            }),
        };
    }
};
