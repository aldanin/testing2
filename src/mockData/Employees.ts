import * as Agents from '../types/Emloyee'

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

const employeeNames = [
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

export const EMPLOYEES: Agents.AgentData[] = [];

TARGETS.forEach(target => {
  for (let i: number = 0; i < 5; i++) {
    const employee = {
      id: getId(),
      name: employeeNames[randomInt(employeeNames.length)],
      targetId: target.id,
      targetName: target.name,
    }

    EMPLOYEES.push(employee);
  }
})
