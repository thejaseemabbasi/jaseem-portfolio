export interface Article {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  summary: string;
  body: string[];
}

export const articlesMeta = {
  eyebrow: 'Journal',
  title: 'Notes on delivery, product, and',
  highlight: 'execution.',
  text: 'Practical write-ups on scoping complex builds, Agile governance, and AI-assisted delivery workflows.',
};

export const articles: Article[] = [
  {
    slug: 'automating-meeting-minutes-with-ai',
    category: 'AI Operations',
    readTime: '4 min read',
    date: 'Nov 2026',
    title: 'Turning client call transcripts into structured minutes without losing context',
    summary:
      'How I paired Granola, Make.com, Google Gemini, and Apps Script to eliminate manual post-meeting admin while keeping action items auditable.',
    body: [
      'Project managers lose hours every week rewriting meeting notes, extracting action items, and formatting follow-ups. The goal of automating minutes is not to replace judgment—it is to remove repetitive formatting so you can review decisions in two minutes instead of thirty.',
      'My workflow starts with raw transcripts captured during stakeholder calls. A lightweight trigger sends the transcript, meeting title, and date into an automation pipeline that pulls a dynamic instruction prompt from a controlled document—making it easy to adjust formatting rules (decisions first, action owners, due dates) without touching the automation logic.',
      'Google Gemini summarizes the transcript into a clean table structure, pushes it into a dedicated Google Sheet, and a small Google Apps Script formats column widths, headers, and borders automatically. A quick human proofread before sending keeps accountability sharp and turns every call into a searchable record.',
    ],
  },
  {
    slug: 'fixed-price-to-sla-retainer',
    category: 'Governance',
    readTime: '5 min read',
    date: 'Oct 2026',
    title: 'Transitioning enterprise clients from fixed-price builds to SLA retainers',
    summary:
      'Lessons from governing multi-site CMS and game programs where commercial clarity mattered just as much as sprint velocity.',
    body: [
      'Fixed-price Statements of Work work well when scope is bounded, such as an initial MVP or a defined platform migration. Where teams get into trouble is treating post-launch evolution like a fixed-price contract.',
      'Across multi-site Optimizely DXP migrations and live game builds, the cleanest handoff happens when you establish baseline metrics early: clear timesheet tracking, documented change boundaries, and weekly SLA reporting on response and resolution times.',
      'Once the core launch proves reliability, moving the account into an SLA-governed retainer or Time & Materials cadence removes constant change-order friction and lets product and engineering focus on roadmap impact.',
    ],
  },
  {
    slug: 'preventing-localization-bottlenecks',
    category: 'Delivery',
    readTime: '4 min read',
    date: 'Sep 2026',
    title: 'Preventing localization bottlenecks in multi-language platform launches',
    summary:
      'Why treating translation and content QA as a final-week task breaks launch dates—and how parallelizing content sprints keeps releases on schedule.',
    body: [
      'On multi-language CMS and mobile app launches, engineering is rarely the only critical path. Content preparation, translation review, and localized QA across seven languages can easily outweigh backend development hours if left until code freeze.',
      'Instead of waiting for all pages to be built before starting localization, structure your work breakdown so content schemas lock early and translation batches move alongside component sprints.',
      'Separating functional QA from content QA in your sprint board gives both teams clear ownership and prevents last-minute release pileups.',
    ],
  },
];
