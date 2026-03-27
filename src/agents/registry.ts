import type { Agent, AgentDefinition } from '../phantom';

export class AgentRegistry {
  constructor(private orgId: string) {}

  async create(definition: AgentDefinition): Promise<Agent> {
    // Persist agent to database, provision email/Slack accounts
    throw new Error('Not implemented');
  }

  async findById(agentId: string): Promise<Agent | null> {
    return null;
  }

  async findAll(): Promise<Agent[]> {
    return [];
  }

  async count(): Promise<number> {
    return 0;
  }
}
