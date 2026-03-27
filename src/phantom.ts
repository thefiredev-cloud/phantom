import { AgentRegistry } from './agents/registry';
import { AgentOrchestrator } from './orchestrator/agent-orchestrator';
import { logger } from './utils/logger';

export interface PhantomConfig {
  orgId: string;
  maxAgents?: number;
}

export class Phantom {
  private config: Required<PhantomConfig>;
  private registry: AgentRegistry;
  private orchestrator: AgentOrchestrator;

  constructor(config: PhantomConfig) {
    this.config = {
      maxAgents: 200,
      ...config,
    };
    this.registry = new AgentRegistry(this.config.orgId);
    this.orchestrator = new AgentOrchestrator(this.registry);
  }

  async createAgent(definition: AgentDefinition): Promise<Agent> {
    if ((await this.registry.count()) >= this.config.maxAgents) {
      throw new Error(`Agent limit reached (${this.config.maxAgents})`);
    }
    const agent = await this.registry.create(definition);
    logger.info({ agentId: agent.id, name: definition.name }, 'Agent created');
    return agent;
  }

  async getAgent(agentId: string): Promise<Agent | null> {
    return this.registry.findById(agentId);
  }

  async listAgents(): Promise<Agent[]> {
    return this.registry.findAll();
  }
}

export interface AgentDefinition {
  name: string;
  role: string;
  email: string;
  personality?: {
    style: 'professional-warm' | 'formal' | 'casual' | 'technical';
    verbosity: 'terse' | 'concise' | 'verbose';
    proactivity: 'low' | 'medium' | 'high';
  };
  capabilities?: string[];
  workingHours?: {
    tz: string;
    start: string;
    end: string;
  };
  voice?: {
    accent?: string;
    gender?: string;
  };
}

export interface Agent {
  id: string;
  definition: AgentDefinition;
  status: 'active' | 'inactive' | 'busy';
  activate(): Promise<void>;
  deactivate(): Promise<void>;
  assign(task: unknown): Promise<void>;
}
