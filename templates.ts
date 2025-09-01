    export type AgentInputField = {
      key: string;
      label: string;
      type: 'text' | 'textarea' | 'number' | 'select' | 'email' | 'url';
      required?: boolean;
      options?: { value: string; label: string }[];
    };

    export type AgentTemplate = {
      key: string;
      name: string;
      description: string;
      inputs: AgentInputField[];
      systemPrompt: string;
      outputKinds: ('markdown'|'csv'|'json')[];
    };

    export const templates: AgentTemplate[] = [
      {
        key: 'nursing_census',
        name: 'Nursing Home Census Builder',
        description: 'Weekly outreach plan + referral CSV.',
        inputs: [
          { key: 'facilityName', label: 'Facility Name', type: 'text', required: true },
          { key: 'city', label: 'City', type: 'text', required: true },
          { key: 'tone', label: 'Tone', type: 'select', options: [
            { value: 'professional', label: 'Professional' },
            { value: 'friendly', label: 'Friendly' },
            { value: 'folksy', label: 'Folksy' }
          ], required: true },
          { key: 'weeklyLeadCount', label: 'Leads per week', type: 'number', required: true },
          { key: 'emailFrom', label: 'Results Email To', type: 'email', required: true },
        ],
        systemPrompt:
`You are an expert healthcare marketer. Create a weekly outreach plan for {{facilityName}} in {{city}}.
1) Prioritized referral sources + rationale.
2) Two cold emails + one follow-up.
3) A CSV with {{weeklyLeadCount}} leads (name, org, role, public email/phone, notes).
Tone: {{tone}}. Be concrete, local, and ethical.`,
        outputKinds: ['markdown','csv']
      },
      {
        key: 'realtor_leads',
        name: 'Local Realtor Referral Generator',
        description: '20 local partners + email copy + social post.',
        inputs: [
          { key: 'city', label: 'City/Region', type: 'text', required: true },
          { key: 'niche', label: 'Niche (optional)', type: 'text' },
          { key: 'emailFrom', label: 'Results Email To', type: 'email', required: true },
        ],
        systemPrompt:
`You are a local partnership scout. Generate: A) 20 partners in {{city}} (JSON array: name, org, role, public email/phone, why-fit). B) Two cold emails tailored to {{niche}} if provided. C) One LinkedIn post draft.`,
        outputKinds: ['json','markdown']
      },
      {
        key: 'study_buddy',
        name: 'Study Buddy (State Exam)',
        description: 'Daily spaced repetition + 10Q quiz + score tips.',
        inputs: [
          { key: 'exam', label: 'Exam name', type: 'text', required: true },
          { key: 'topicFocus', label: 'Topic focus (optional)', type: 'text' },
          { key: 'emailFrom', label: 'Results Email To', type: 'email', required: true },
        ],
        systemPrompt:
`You are a study coach. Prepare: 1) 10 spaced-repetition flashcards for {{exam}} (focus: {{topicFocus}} if provided). 2) A 10-question quiz with answers + explanations. 3) A 1-paragraph study tip.`,
        outputKinds: ['markdown','json']
      }
    ];
