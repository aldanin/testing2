import * as Agents from '../types/Agent'

let lastId = 0;

function getId(): string {
  return (lastId++).toString();
}

function randomInt(max: number) {
  return Math.floor(Math.random() * max)
}

const targetNames = [
  'Yuri the Fox', // id = '0'
  'Ahmad the assassin', // id = '1'
  'Yoram the Hoodlum', // id = '2'
]

const agentNames = [
  'xxx',
  'yyy',
  'zzz',
  'wtf',
  'Boris',
  'Bond',
  'James',
]

export const TARGETS = targetNames.map(name => {
  return {
    id: getId(),
    name: name
  }
})

export const AGENTS: Agents.AgentData[] = [];
//
// Create agents for each target. First agent id for each target is target.
// First agent id == '3':
//
TARGETS.forEach(target => {
  for (let i: number = 0; i < 5; i++) {
    const agent = {
      id: getId(),
      name: agentNames[randomInt(agentNames.length)],
      targetId: target.id,
      targetName: target.name,
    }

    AGENTS.push(agent);
  }
})
