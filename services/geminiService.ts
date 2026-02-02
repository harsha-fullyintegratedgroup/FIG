import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatMessage } from "../types";

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

export class GeminiService {
  private ai: GoogleGenAI;
  const APIKEY: string = "AIzaSyAn9ef2zi3QwL_Og8LxC3l8J1KmZtLz8ss";

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: APIKEY });
  }

  async sendMessage(message: string, history: ChatMessage[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.65,
          topP: 0.9,
          topK: 40,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw new Error("My strategic processors are temporarily offline. Please refresh and try again.");
    }
  }
}

export const geminiService = new GeminiService();
