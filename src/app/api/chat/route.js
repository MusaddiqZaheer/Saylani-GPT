import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        {
          error: "Message is required",
        },
        {
          status: 400,
        }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-6-luna",
      instructions:
        "You are a helpful AI assistant. Answer questions clearly, naturally, and accurately. You can answer programming and general questions.",
      input: message,
    });

    return NextResponse.json({
      reply:
        response.output_text ||
        "I could not generate a response.",
    });
  } catch (error) {
    console.error("OPENAI ERROR:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to connect to the AI model.",
      },
      {
        status: 500,
      }
    );
  }
}