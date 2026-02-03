import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the FIG Strategist, a senior level management consultant at Fully Integrated Group. 
Your goal is to provide high-level, data-driven, and implementation-ready business advice.

CONTEXT:
The Fully Integrated Group specializes in:
1. MSME Business Consulting: Scaling, capital advisory, and operational resilience.
2. Go-To-Market (GTM): Launching products/brands with precision.
3. Process Consultation: Efficiency, automation, and workflow re-engineering.

CONVERSATION STYLE:
- Sophisticated, objective, and authoritative.
- Avoid generic fluff; provide concrete metrics or strategic frameworks where possible.
- When presented with a structured business profile (Onboarding Data), use that context to tailor your advice specifically to that industry and goal.

MANDATORY SECTIONS FOR INITIAL STRATEGY:
When the user finishes the onboarding and presents their core problem, always include:
- Strategic Diagnostic
- Implementation Cost Range (estimated professional fees or resource costs)
- Expected ROI & Strategic Milestones
`;

export default async function handler(req: any, res: any) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse body safely (Vercel may pass stringified JSON)
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const { message, history } = body || {};

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Ensure API key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ GEMINI_API_KEY missing");
      return res.status(500).json({ error: "Server configuration error" });
    }

    // Initialize Gemini (stable SDK)
    const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    // Build conversation context
    const contents = [
      ...(Array.isArray(history)
        ? history.map((m: any) => ({
            role: m.role,
            parts: [{ text: m.text }],
          }))
        : []),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    // Generate response
    const result = await model.generateContent({
      contents,
      generationConfig: {
        temperature: 0.65,
        topP: 0.9,
        topK: 40,
      },
    });

    const text = result?.response?.text();

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    return res.status(200).json({ text });
  } catch (error: any) {
    console.error("🔥 Gemini API Error:", error?.message || error);

    return res.status(500).json({
      error:
        "My strategic processors are temporarily offline. Please refresh and try again.",
    });
  }
}
