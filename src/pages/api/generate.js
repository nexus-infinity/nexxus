import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = 'edge';

export default async function handler(req) {
  const { prompt } = await req.json();

  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    stream: true,
    prompt: `Summarize the following text:\n\n${prompt}\n\nSummary:`,
    max_tokens: 100,
    temperature: 0.5,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

