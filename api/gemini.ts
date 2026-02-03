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
- Implementation Cost Range
- Expected ROI & Strategic Milestones
`;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Safe body parsing (Vercel compatible)
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const { message, history } = body || {};

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ GEMINI_API_KEY missing");
      return res.status(500).json({ error: "Server configuration error" });
    }

    // ✅ Correct usage for @google/genai
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
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
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.65,
        topP: 0.9,
        topK: 40,
      },
    });

    return res.status(200).json({
      text: response.text,
    });
  } catch (error: any) {
    console.error("🔥 Gemini API Error:", error);
    return res.status(500).json({
      error:
        "My strategic processors are temporarily offline. Please refresh and try again.",
    });
  }
}
