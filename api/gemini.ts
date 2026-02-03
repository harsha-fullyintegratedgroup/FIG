import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
You are the FIG Strategist, a senior level management consultant at Fully Integrated Group.

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
- Strategic Diagnostic
- Implementation Cost Range (estimated professional fees or resource costs)
- Expected ROI & Strategic Milestones
`;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const { message, history } = body || {};

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY missing" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const contents = [
      ...(Array.isArray(history)
        ? history.map((m: any) => ({
            role: m.role,
            parts: [{ text: m.text }],
          }))
        : []),
      { role: "user", parts: [{ text: message }] },
    ];

    const result = await model.generateContent({
      contents,
      generationConfig: {
        temperature: 0.65,
        topP: 0.9,
        topK: 40,
      },
    });

    const text = result?.response?.text();
    if (!text) throw new Error("Empty response from Gemini");

    return res.status(200).json({ text });
  } catch (err: any) {
    // Graceful quota handling
    if (err?.status === 429) {
      return res.status(429).json({
        error:
          "AI usage limit reached. Please try again later or contact support.",
      });
    }

    console.error("Gemini error:", err);
    return res.status(500).json({
      error:
        "My strategic processors are temporarily offline. Please refresh and try again.",
    });
  }
}
