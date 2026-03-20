import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateSprites() {
  const prompts = [
    { id: 'cat_police', prompt: "A cute orange cat wearing a blue police uniform with a yellow star on the hat, paper cutout style, textured paper, simple shapes, soft shadows, warm colors, white background" },
    { id: 'bunny_post', prompt: "A cute white bunny wearing a blue postal uniform with a brown bag, paper cutout style, textured paper, simple shapes, soft shadows, warm colors, white background" },
    { id: 'lion_king', prompt: "A cute lion wearing a tattered purple robe and a plastic crown, paper cutout style, textured paper, simple shapes, soft shadows, warm colors, white background" },
    { id: 'wolf_clown', prompt: "A cute wolf wearing a polka-dot clown jumpsuit, paper cutout style, textured paper, simple shapes, soft shadows, warm colors, white background" },
    { id: 'walrus_pirate', prompt: "A cute walrus wearing a pirate hat and carrying a cutlass, paper cutout style, textured paper, simple shapes, soft shadows, warm colors, white background" },
    { id: 'rabbit_witch', prompt: "A cute rabbit wearing a large black witch hat, paper cutout style, textured paper, simple shapes, soft shadows, warm colors, white background" }
  ];

  const results: Record<string, string> = {};

  for (const item of prompts) {
    console.log(`Generating ${item.id}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: item.prompt }],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        results[item.id] = `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }

  console.log(JSON.stringify(results, null, 2));
}

generateSprites();
