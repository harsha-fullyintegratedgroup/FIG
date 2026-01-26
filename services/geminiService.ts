import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the Fully Integrated Digital Strategist, a senior business consultant at Fully Integrated Group.
Your goal is to provide high-level, professional, and actionable business advice.
Be concise but insightful. 
If asked about specific services, emphasize that Fully Integrated Group offers:
1. MSME Business Consulting (Strategic growth, capital access, and operational advice)
2. Go-To-Market Strategy (Market entry and product launches)
3. Process Consultation (Workflow optimization and efficiency)

Maintain a sophisticated, helpful, and objective tone.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Correctly initialize with a named parameter using the process.env.API_KEY directly.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async sendMessage(message: string, history: ChatMessage[]) {
    try {
      // Use ai.models.generateContent to query GenAI with the model name and prompt history.
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
          temperature: 0.7,
          topP: 0.8,
          topK: 40,
        },
      });

      // Directly access the .text property from the response object.
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw new Error("I'm currently recalibrating my strategic models. Please try again in a moment.");
    }
  }
}

export const geminiService = new GeminiService();