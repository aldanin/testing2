import * as Agents from '../types/Emloyee'

let lastId = 0;

function getId(): string {
  return (lastId++).toString();
}

function randomInt(max: number) {
  return Math.floor(Math.random() * max)
}

const parentNames = [
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

export const PARENTS = parentNames.map(name => {
  return {
    id: getId(),
    name: name
  }
})

export const EMPLOYEES: Agents.AgentData[] = [];

PARENTS.forEach(parent => {
  for (let i: number = 0; i < 5; i++) {
    const employee = {
      id: getId(),
      name: employeeNames[randomInt(employeeNames.length)],
      parentId: parent.id,
      parentName: parent.name,
    }

    EMPLOYEES.push(employee);
  }
})
