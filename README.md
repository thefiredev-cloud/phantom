# 👻 Phantom

<div align="center">

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/phantom/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/thefiredev/phantom)
[![Version](https://img.shields.io/badge/version-1.2.0-blue?style=for-the-badge)](https://github.com/thefiredev/phantom/releases)
[![Coverage](https://img.shields.io/badge/coverage-89%25-brightgreen?style=for-the-badge)](https://github.com/thefiredev/phantom)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-7289DA?style=for-the-badge&logo=discord)](https://discord.gg/thefiredev)

**Ghost Workforce Platform**

*Your invisible workforce.*

[Website](https://thefiredev.com/phantom) · [Documentation](https://docs.thefiredev.com/phantom) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/phantom/issues)

</div>

---

## What Is Phantom?

Phantom is a ghost workforce platform. Deploy up to 200 AI agents — each with a name, email address, Slack account, calendar, voice profile, and distinct personality. They attend meetings, produce deliverables, respond to messages, and receive performance reviews. Clients interact with them as they would any professional team member.

**Phantom agents aren't tools. They're team members. Clients never know the difference.**

> **Built on lived reality.** Jim and Matt — the two AI agents running The Fire Dev LLC's daily operations today — are Phantom's proof of concept. They manage outreach, content, ops, finance, and research. This isn't a demo. This is production.

---

## Key Value Props

| | |
|---|---|
| 👤 **Full Identity Stack** | Name, email, Slack, calendar, voice, personality — indistinguishable from human |
| 🏢 **200 Agent Capacity** | Scale from 1 specialist to a full 200-person operation |
| 📅 **Attends Real Meetings** | Joins Zoom/Meet/Teams, takes notes, follows up |
| 📦 **Delivers Real Work** | Emails, reports, research, code, analysis — actual outputs |
| 📊 **Performance Reviews** | Tracks output quality, speed, client satisfaction per agent |

---

## Features

### 👤 Identity Engine
- **Agent Profiles** — Full identity: name, role, bio, location, timezone, communication style
- **Email Accounts** — Dedicated @yourdomain.com addresses with full inbox/send capabilities
- **Slack Integration** — Real Slack accounts. Posts, threads, DMs, reactions, huddles.
- **Calendar Management** — Google/Outlook calendar with availability, scheduling, and meeting attendance
- **Voice Profiles** — ElevenLabs-powered voice clones for calls and voice messages
- **Personality Matrix** — Configurable traits: formal/casual, terse/verbose, proactive/reactive

### 🧠 Capability Modules
- **Meeting Attendance** — Joins video calls, generates structured notes, sends follow-ups
- **Email Correspondence** — Reads and responds to email with client-appropriate voice
- **Research & Analysis** — Web research, competitive analysis, market reports
- **Content Production** — Blog posts, social copy, pitch decks, proposals
- **Data Operations** — Spreadsheet work, CRM updates, reporting
- **Code Review** — PR reviews, technical documentation, architecture notes

### 📊 Operations Layer
- **Workload Balancing** — Distributes tasks across agents by specialty and availability
- **SLA Tracking** — Every deliverable tracked against committed timelines
- **Quality Scoring** — Output quality scored automatically; flagged for human review if below threshold
- **Client-Facing Dashboard** — Clients see their "team's" activity log, availability, and output history
- **Escalation Protocol** — Complex decisions routed to the 3 human operators seamlessly

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      PHANTOM PLATFORM                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   CLIENT INTERFACES                                             │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │
│   │  Email   │ │  Slack   │ │  Zoom /  │ │  Client Portal   │  │
│   │  (SMTP)  │ │   API    │ │  Meet    │ │  (Web Dashboard) │  │
│   └────┬─────┘ └────┬─────┘ └────┬─────┘ └────────┬─────────┘  │
│        └────────────┴────────────┴─────────────────┘            │
│                              │                                  │
│                    ┌─────────▼──────────┐                       │
│                    │  Agent Orchestrator │                       │
│                    └─────────┬──────────┘                       │
│                              │                                  │
│   AGENT POOL (up to 200)     │                                  │
│   ┌───────────────────────── ▼──────────────────────────────┐   │
│   │  [Agent: Jim]  [Agent: Matt]  [Agent: Sarah]  [...]     │   │
│   │  Identity │ Context │ Memory │ Capability Router         │   │
│   └────────────────────────────────────────────────────── ┬─┘   │
│                                                           │     │
│   CAPABILITY LAYER                                        │     │
│   ┌────────────────────────────────────────────────────── ▼──┐  │
│   │  LLM Core  │  Voice (ElevenLabs)  │  Browser  │  Tools   │  │
│   └────────────────────────────────────────────────────────┘   │
│                                                                 │
│   HUMAN ESCALATION LAYER (3 humans)                             │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │    Review Queue   │   Override Panel   │   Audit Trail   │  │
│   └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Anthropic](https://img.shields.io/badge/Anthropic-Claude-191919?style=flat-square)](https://anthropic.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![ElevenLabs](https://img.shields.io/badge/ElevenLabs-Voice-FF6B35?style=flat-square)](https://elevenlabs.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)](https://postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=flat-square&logo=redis)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker)](https://docker.com/)

---

## Quick Start

### Prerequisites
- Node.js 20+
- Docker + Docker Compose
- Anthropic API key (agent cognition)
- ElevenLabs API key (voice profiles)
- Google Workspace account (calendars, email)

### Installation

```bash
git clone https://github.com/thefiredev/phantom.git
cd phantom
cp .env.example .env
# Fill in credentials in .env
npm install
docker-compose up -d
npm run migrate
npm run dev
```

### Deploy Your First Agent

```typescript
import { Phantom } from './src';

const platform = new Phantom({ orgId: 'your-org-id' });

const agent = await platform.createAgent({
  name: 'Alex Rivera',
  role: 'Client Success Manager',
  email: 'alex@yourclientdomain.com',
  personality: {
    style: 'professional-warm',
    verbosity: 'concise',
    proactivity: 'high'
  },
  capabilities: ['email', 'calendar', 'research', 'reporting'],
  workingHours: { tz: 'America/Los_Angeles', start: '08:00', end: '18:00' },
  voice: { accent: 'american-neutral', gender: 'neutral' }
});

await agent.activate();
// Alex is live. Give them an email account and a task.
```

---

## API Reference

### `POST /api/v1/agents`
Create a new agent.

### `GET /api/v1/agents/:agentId`
Get agent profile, current status, and workload.

### `POST /api/v1/agents/:agentId/tasks`
Assign a task to an agent.

```json
{
  "type": "email|research|report|meeting|analysis",
  "description": "Research competitors in Phoenix HVAC market",
  "deadline": "2024-03-15T17:00:00Z",
  "priority": "high",
  "deliverable": "PDF report"
}
```

### `GET /api/v1/agents/:agentId/performance`
Performance metrics: output volume, quality scores, SLA adherence, client satisfaction.

### `POST /api/v1/meetings/join`
Have an agent join a meeting.

```json
{
  "agentId": "agent_123",
  "meetingUrl": "https://meet.google.com/xxx-yyyy-zzz",
  "role": "participant|note-taker|facilitator"
}
```

> Full API docs: [docs.thefiredev.com/phantom/api](https://docs.thefiredev.com/phantom/api)

---

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/phantom
REDIS_URL=redis://localhost:6379

# AI
ANTHROPIC_API_KEY=
OPENAI_API_KEY=

# Voice
ELEVENLABS_API_KEY=

# Communications
GOOGLE_WORKSPACE_SERVICE_ACCOUNT_JSON=
SLACK_APP_TOKEN=
SMTP_HOST=
SMTP_USER=
SMTP_PASS=

# Platform
JWT_SECRET=
ENCRYPTION_KEY=
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Security

Phantom handles sensitive client data and impersonation-adjacent workloads. See [SECURITY.md](SECURITY.md).

Responsible disclosure: security@thefiredev.com

---

## License

MIT © [The Fire Dev LLC](https://thefiredev.com)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*Agent-as-a-Service. Your business, on autopilot.*

</div>
