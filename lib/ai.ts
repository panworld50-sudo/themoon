import OpenAI from "openai"

const openai = new OpenAI({
 apiKey:process.env.OPENAI_API_KEY
})

export async function generateArticle(topic){

const response = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{
role:"user",
content:`Write a professional news article about ${topic}`
}
]

})

return response.choices[0].message.content

}
