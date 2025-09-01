import OpenAI from 'openai';
import { templates } from './templates';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

function fillTemplate(prompt: string, config: Record<string, any>) {
  return prompt.replace(/{{([A-Za-z0-9_]+)}}/g, (_, k) => String(config[k] ?? ''));
}

export async function runAgentOnce(agent: { id: number; templateKey: string; config: Record<string, any> }) {
  const tpl = templates.find(t => t.key === agent.templateKey);
  if (!tpl) throw new Error('Template not found');

  const prompt = fillTemplate(tpl.systemPrompt, agent.config);
  const completion = await openai.responses.create({
    model: 'gpt-4.1-mini',
    input: [
      { role: 'system', content: tpl.systemPrompt },
      { role: 'user', content: prompt }
    ]
  });

  const raw = completion.output_text ?? '';
  const summary = `Generated ${tpl.outputKinds.join(', ')} via ${tpl.name}`;
  return { summary, data: raw };
}
