
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAI = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateAIResponse = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are an advanced AI companion named Trae-Bot. Your responses should be professional, insightful, and formatted using Markdown where appropriate. You excel at coding assistance, creative writing, and data analysis.",
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
    },
  });

  try {
    const response = await chat.sendMessage({ message: prompt });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const streamAIResponse = async (prompt: string, onChunk: (chunk: string) => void) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are an advanced AI companion named Trae-Bot. Your responses should be professional, insightful, and formatted using Markdown. You excel at coding assistance, creative writing, and data analysis.",
    },
  });

  try {
    const stream = await chat.sendMessageStream({ message: prompt });
    let fullText = "";
    for await (const chunk of stream) {
      const textChunk = (chunk as GenerateContentResponse).text || "";
      fullText += textChunk;
      onChunk(textChunk);
    }
    return fullText;
  } catch (error) {
    console.error("Streaming API Error:", error);
    throw error;
  }
};
