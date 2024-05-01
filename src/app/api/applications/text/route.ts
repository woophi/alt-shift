import { NewApplicationData } from '@/core/contracts';
import OpenAI from 'openai';

import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export async function POST(req: Request) {
  const openai = new OpenAI({ apiKey: serverRuntimeConfig.openAiKey });
  const body = await req.json();
  const { additionalDetails, bestSkills, company, jobTitle } = body as NewApplicationData;

  if (!(additionalDetails || bestSkills || company || jobTitle)) {
    return new Response(undefined, {
      status: 400,
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that generates personalized job application`,
        },
        {
          role: 'user',
          content: `Can you give me a personalized job application for [Company] - ${company}, [Job Title] - ${jobTitle}, [Skills List] - ${bestSkills}, [Additional Details] - ${additionalDetails} ?`,
        },
      ],

      model: 'gpt-3.5-turbo',
    });
    return Response.json({ result: completion.choices[0]?.message.content ?? '' });
  } catch (error) {
    console.error(error);
    return new Response(undefined, {
      status: 500,
      statusText: 'Failed to generate data',
    });
  }
}
