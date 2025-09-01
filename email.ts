import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendOutputEmail(to: string, agentName: string, result: { summary: string; data: any }) {
  const html = `
    <h2>${agentName} — Run Summary</h2>
    <p>${result.summary}</p>
    <pre style="white-space:pre-wrap">${typeof result.data === 'string' ? result.data : JSON.stringify(result.data, null, 2)}</pre>
  `;
  await resend.emails.send({ from: 'no-reply@yourdomain.com', to, subject: `${agentName} — Results`, html });
}
