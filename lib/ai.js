import OpenAI from "openai"

let openaiClient

function getOpenAIClient() {
  if (openaiClient) return openaiClient

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY environment variable")
  }

  openaiClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  return openaiClient
}

export async function generateArticle(topic) {
  const openai = getOpenAIClient()

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Write a professional news article about ${topic}`
      }
    ]
  })

  return response.choices[0].message.content
}
