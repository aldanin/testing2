import * as moment from 'moment'
import * as AgentMock from './Agents'
import * as Agents from '../types/Agent'
import * as Tasks from '../types/Task'
import * as TaskBasics from '../types/TaskBasics'
import * as CommonFunctions from './CommonFunctions'
// import * as AgentSummary from '../types/AgentSummary'

//////////////////
// Value arrays:
//////////////////
const descriptions = {
  main: 'Main Account',
  gmail: 'Gmail extraction',
  icloud: 'iCloud extraction',
  none: ''
};

////////////////
// Task status:
////////////////
const getTaskStatus = (startTimestamp?: number) => {
  if (startTimestamp && startTimestamp > Date.now()) {
    //
    // task due time has not arrived yet:
    //
    return 'Scheduled';
  }
  let serviceType: Tasks.TaskStatus;
  switch (CommonFunctions.randomInt(9)) {
    case 0:
      serviceType = 'Aborted';
      break;
    case 1:
    case 2:
    case 3:
      serviceType = 'Completed';
      break;
    case 4:
    case 5:
    case 6:
      serviceType = 'Running';
      break;
    case 7:
      serviceType = 'Pending';
      break;
    case 8:
      serviceType = 'Canceled';
      break;
    default:
      break;
  }
  return serviceType;
}

const getCompleteStatus = (taskStatus?: Tasks.TaskStatus) => {
  if (taskStatus && taskStatus !== 'Completed') {
    return null;
  }

  let status: Tasks.CompleteStatus;
  switch (CommonFunctions.randomInt(3)) {
    case 0:
    case 1:
      status = 'Success';
      break;
    case 2:
      status = 'Failed';
      break;
    case 3:
      status = 'Partial';
      break;
    default:
      break;
  }
  return status;
}

////////////////
// Subservice:
////////////////
const getSubserviceStatus = () => {
  let status: Tasks.TaskStatus | Tasks.CompleteStatus = getTaskStatus()
  if (status === 'Completed') {
    status = getCompleteStatus()
  }

  return status;
}

const getSubserviceInfoMessage = (status: Tasks.TaskStatus | Tasks.CompleteStatus) => {
  const messages = {
    Running: 'Is running now',
    Success: '5 suspicious messages',
    Failed: 'Sudden shutdown'
  }

  return messages[status];
}

const createSubserviceInfo = () => {
  const exists = CommonFunctions.randomBool();

  if (!exists) {
    return null;
  }

  const status = getSubserviceStatus()
  let info: Tasks.SubServiceInfo = {
    status: getSubserviceStatus(),
    message: getSubserviceInfoMessage(status),
  }

  return info;
}

const createGoogleSubServicesData = () => {
  const subservice = {
    gmail: {
      active: createSubserviceInfo(),
      inbox: createSubserviceInfo(),
      sent: createSubserviceInfo(),
      drafts: createSubserviceInfo(),
      attachments: createSubserviceInfo(),
      amountOfEmails: createSubserviceInfo(),
      timeRange: createSubserviceInfo(),
    },
    bookmarks: createSubserviceInfo(),
    contacts: createSubserviceInfo(),
    googlePlus: createSubserviceInfo(),
    profile: createSubserviceInfo(),
    search: createSubserviceInfo(),
    drive: createSubserviceInfo(),
    locations: createSubserviceInfo(),
    keep: createSubserviceInfo(),
    photos: createSubserviceInfo(),
    passwords: createSubserviceInfo(),
    hangouts: createSubserviceInfo(),
    group: createSubserviceInfo(),
  }
  return subservice;
}

const createICloudSubServicesData = () => {
  const subservice = {
    whatsApp: {
      active: createSubserviceInfo(),
      messages: createSubserviceInfo(),
      media: createSubserviceInfo(),
    },
    contacts: createSubserviceInfo(),
    calendars: createSubserviceInfo(),
    completeDeviceBackup: createSubserviceInfo(),
  }

  return subservice;
}

export const createSubServices = (service: TaskBasics.ServiceType) => {
  let subservice: Tasks.GoogleSubServiceData | Tasks.CloudSubServiceData;
  switch (service) {
    case 'Google':
      subservice = createGoogleSubServicesData();
      break;
    case 'iCloud':
      subservice = createICloudSubServicesData();
      break;
    default:
      break;
  }
  return subservice;
}
////////////////
// Description:
////////////////
const getICloudDescription = () => {
  let desc;
  switch (CommonFunctions.randomInt(3)) {
    case 0:
      desc = descriptions.main;
      break;
    case 1:
      desc = descriptions.icloud;
      break;
    case 2:
      desc = null;
      break;
    default:
      break;
  }
  return desc;
}

const getGoogleDescription = () => {
  let desc;
  switch (CommonFunctions.randomInt(3)) {
    case 0:
      desc = descriptions.main;
      break;
    case 1:
      desc = descriptions.gmail;
      break;
    case 2:
      desc = null;
      break;
    default:
      break;
  }
  return desc;
}

const getDescription = (service: TaskBasics.ServiceType) => {
  let desc;
  switch (service) {
    case 'Google':
      desc = getGoogleDescription();
      break;
    case 'iCloud':
      desc = getICloudDescription();
      break;
    default:
      break;
  }
  return desc;
}

const getOperation = () => {
  return 'Wildfire';
}

const getDuration = (status: Tasks.TaskStatus) => {
  return status === 'Pending' || status === 'Scheduled'
    ? 0
    : Math.round(Math.random() * 4 * 3600 * 1000 - 60 * 10 + 1);
}

//////////////////////////////////////////////////
/////////////////////////////////////////////////

export const TASKS: Tasks.Task[] = [];
////////////////////////////////
// Create tasks for each agent:
///////////////////////////////

const createTasksByAgent = (agent: Agents.AgentData, slotDate: number) => {
  const tasks: Tasks.Task[] = [];

  const service = CommonFunctions.createServiceType();

  for (let index: number = 0; index < CommonFunctions.randomInt(30, 10); index++) {
    const id = CommonFunctions.getId();
    const name = CommonFunctions.taskNames[CommonFunctions.randomInt(CommonFunctions.taskNames.length - 1)];

    const subServices = createSubServices(service);
    const proxy = CommonFunctions.proxies[CommonFunctions.randomInt(CommonFunctions.proxies.length - 1)];
    const startTimestamp = CommonFunctions.randDateInSlot(slotDate);

    const status = getTaskStatus(startTimestamp);
    const complete = getCompleteStatus(status);
    const description = getDescription(service);
    const duration = getDuration(status);
    const operation = getOperation();

    const task = {
      id,
      name,
      agent,
      service,
      subServices,
      proxy,
      startTimestamp,
      duration,
      index,
      status,
      complete,
      description,
      operation
    }

    tasks.push(task);
  }
  tasks.sort((task1, task2) => {
    // sort by time ascending:
    return task1.startTimestamp - task2.startTimestamp;
  })

  return tasks;
}

const createAgentTasks = (agent: Agents.AgentData) => {
  const firstDateEver = moment().subtract(3, 'months').valueOf(); // Start - 3 months ago
  const lastDate = moment().add(2, 'months').valueOf() // End - 3 months from now
  const nextTimeSlot = (date: number) => moment(date).add(6, 'hours').valueOf(); // Get the next time slot

  let tasks: Tasks.Task[] = [];

  for (let slotDate: number = firstDateEver; slotDate < lastDate; slotDate = nextTimeSlot(slotDate)) {
    tasks = tasks.concat(createTasksByAgent(agent, slotDate));
  }

  return tasks;
}
//
// Holds the final data structure, an array of the following interface:
//
interface AgentContainer {
  agentId: Agents.AgentId,
  tasks: Tasks.Task[]
}

const AGENT_CONTAINERS: AgentContainer[] = [];

AgentMock.AGENTS.forEach(agent => {
  const tasks = createAgentTasks(agent);

  AGENT_CONTAINERS.push({
    agentId: agent.id,
    tasks: tasks,
  })
})
////////////////////////////////////////
//            DATA GETTERS:
////////////////////////////////////////

const getAgentContainerById =
  (agentId: Agents.AgentId) => AGENT_CONTAINERS.find(container => container.agentId === agentId)

export const getTasksInTimeslot = (tasks: Tasks.Task[], timeslot: TaskBasics.TimeSlotData) => {
  return timeslot
    ? tasks.filter(task =>
      timeslot.rangeStart <= task.startTimestamp && task.startTimestamp < timeslot.rangeEnd)
    : tasks;
}

export const getTasksByAgentId = (agentId: Agents.AgentId, timeSlot: TaskBasics.TimeSlotData = null) => {
  const container = getAgentContainerById(agentId);
  const tasks = getTasksInTimeslot(container.tasks, timeSlot);

  return tasks;
}

//////////////////////////////////////////////////
// To see mock data in the console uncomment this:
//////////////////////////////////////////////////

// console.log(printTasks(getTasksByAgentId('6', {
//   rangeStart: moment().valueOf(),
//   rangeEnd: moment().add(12, 'hours').valueOf()
// })))
