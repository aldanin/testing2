import * as moment from 'moment'
import * as AgentMock from './Agents'
import * as Agents from '../types/Agent'
import * as Tasks from '../types/Task'
import * as TaskBasics from '../types/TaskBasics'
import * as AgentRun from '../types/AgentRun'
import * as CommonFunctions from './CommonFunctions'
// import * as AgentSummary from '../types/AgentSummary'

///////////////////////
// General functions:
///////////////////////

// export const printAgentRuns = (agentRuns: AgentRun.AgentRunData[]) => {
//   agentRuns.forEach(agentRun => {
//     console.log('AgentRun ==>', agentRun)
//   });
//
// }

const createRecurrencePattern = () => {
  let pattern: AgentRun.RecurrencePattern;
  const rand = CommonFunctions.randomInt(3);
  switch (rand) {
    case 0:
      pattern = 'Once';
      break;
    case 1:
      pattern = 'Daily';
      break;
    case 2:
      pattern = 'Weekly';
      break;
    case 3:
      pattern = 'Monthly';
      break;
    default:
      break;
  }
  return pattern;
}
//////////////////
// Run-end field
/////////////////
const createRunEndOptions = (pattern: AgentRun.RecurrencePattern, optionalStartDate: number = null) => {
  if (pattern === 'Once') {
    return null;
  }
  let runEndOption: AgentRun.RunEndOptions;

  switch (CommonFunctions.randomInt(2)) {
    case 0:
      runEndOption = {
        isNever: true,
        afterOccurrences: null,
        specificDate: null
      }
      break;
    case 1:
      runEndOption = {
        isNever: false,
        afterOccurrences: CommonFunctions.randomInt(3, 1),
        specificDate: null
      }
      break;
    case 2:
      runEndOption = {
        isNever: false,
        afterOccurrences: null,
        specificDate: CommonFunctions.randomDate(optionalStartDate, 10, 'days'),
      }
      break;
    default:
      break;
  }

  return runEndOption;
}
////////////////////////
// Repeat field:
///////////////////////
const createRepeat = () => {
  return CommonFunctions.randomInt(3, 0) || 1;
}

const createMonthlyRepeatBy = () => {
  let repeatBy;
  switch (CommonFunctions.randomInt(1, 0)) {
    case 0:
      repeatBy = 'DayOfTheWeek';
      break;
    case 1:
      repeatBy = 'DayOfTheMonth';
      break;
    default:
      break;
  }
  return repeatBy;
}

//////////////////
// Time-slots:
/////////////////

// Note: slotNumber = 0 ,1, 2, 3
const createTimeSlot = (startDay: number, slotNumber: number): TaskBasics.TimeSlotData => {
  return {
    rangeStart:
    moment.duration(startDay, 'days').asMilliseconds() +
    moment.duration(slotNumber + 1, 'hours').asMilliseconds(),
    rangeEnd:
    moment.duration(startDay, 'days').asMilliseconds() +
    moment.duration(slotNumber + 2, 'hours').asMilliseconds(),
  };
}

const createWeeklySlots = (timesPerWeek: number) => {
  let slots = [];
  for (let i = 0; i < timesPerWeek; i++) {
    const dayOfWeek = CommonFunctions.randomDayOfWeek();
    slots.push(createTimeSlot(dayOfWeek, CommonFunctions.randSlotNo()));
  }
  return slots;
}

const createTimeSlots = (recurrence: AgentRun.RecurrenceDataBasic) => {
  let timeSlots = [];
  switch (recurrence.pattern) {
    case 'Daily':
      timeSlots = [createTimeSlot(0, CommonFunctions.randomInt(1))];
      break;
    case 'Weekly':
      timeSlots = createWeeklySlots((recurrence as AgentRun.RecurrenceDataWeekly).timesPerWeek);
      break;
    case 'Once':
    case 'Monthly':
      timeSlots = [
        createTimeSlot(0, CommonFunctions.randomInt(1)),
        createTimeSlot(0, CommonFunctions.randomInt(3, 2))];
      break;
    default:
      break;
  }
  return timeSlots;
}

///////////////////////
// Recurrence objects:
//////////////////////
const createRecurrenceOnce = (): AgentRun.RecurrenceDataOnce => {
  return {
    pattern: 'Once',
    startsTimestamp: null,
    repeatEvery: null,
    runEndOptions: null,
    timeSlots: null
  }
}

const createRecurrenceDaily = (): AgentRun.RecurrenceDataDaily => {
  return {
    pattern: 'Daily',
    startsTimestamp: null,
    repeatEvery: null,
    runEndOptions: null,
    timeSlots: null
  }
}

const createRecurrenceWeekly = (): AgentRun.RecurrenceDataWeekly => {
  return {
    pattern: 'Weekly',
    startsTimestamp: null,
    repeatEvery: null,
    runEndOptions: null,
    timeSlots: null,
    timesPerWeek: createRepeat()
  }
}
const createRecurrenceMonthly = (): AgentRun.RecurrenceDataMonthly => {
  return {
    pattern: 'Monthly',
    startsTimestamp: null,
    repeatEvery: null,
    runEndOptions: null,
    timeSlots: null,
    repeatBy: createMonthlyRepeatBy(),
  }
}

const createRecurrence = (): AgentRun.RecurrenceDataBasic => {
  const pattern = createRecurrencePattern();
  let recurrence;

  switch (pattern) {
    case 'Once':
      recurrence = createRecurrenceOnce();
      break;
    case 'Daily':
      recurrence = createRecurrenceDaily();
      break;
    case 'Weekly':
      recurrence = createRecurrenceWeekly();
      break;
    case 'Monthly':
      recurrence = createRecurrenceMonthly();
      break;
    default:
      break;
  }

  recurrence.repeatEvery = pattern !== 'Once' ? createRepeat() : null;
  recurrence.startsTimestamp = pattern !== 'Once' ? CommonFunctions.randomDate(moment().valueOf(), 10, 'days') : null;
  recurrence.runEndOptions = createRunEndOptions(pattern, recurrence.startsTimestamp);
  recurrence.timeSlots = createTimeSlots(recurrence); // These depend on recurrence value

  return recurrence;
}

///////////////////////
// Activity pattern:
//////////////////////
const createActivityPattern = (isWholePattern: boolean) => {
  const activityPattern: AgentRun.SlotActivity[] = [];
  const limit = isWholePattern ? 7 : 1;
  //
  // If isWholePattern is false, we create only one set of 4 slots:
  //
  for (let day = 0; day < limit; day++) {
    for (let slotNumber = 0; slotNumber < 4; slotNumber++) {
      const slotActivity: AgentRun.SlotActivity = {
        slot: createTimeSlot(day, slotNumber),
        strength: CommonFunctions.randomInt(3),
      }

      activityPattern.push(slotActivity)
    }
  }

  return activityPattern;
}

const createActivityPatternByRecurrence = (recurrence: AgentRun.RecurrenceDataBasic) => {

  let activityPatern;
  switch (recurrence.pattern) {
    case 'Once':
    case 'Daily':
    case 'Weekly':
      activityPatern = createActivityPattern(true);
      break;
    case 'Monthly':
      activityPatern = createActivityPattern(false);
      break;
      default:
      break;
  }

  return activityPatern
}
////////////////
// Subservice:
////////////////
const createGoogleSubServices = () => {
  const subservice = {
    gmail: {
      active: CommonFunctions.randomBool(),
      inbox: CommonFunctions.randomBool(),
      sent: CommonFunctions.randomBool(),
      drafts: CommonFunctions.randomBool(),
      attachments: CommonFunctions.randomBool(),
      amountOfEmails: CommonFunctions.randomBool(),
      timeRange: CommonFunctions.randomBool(),
    },
    bookmarks: CommonFunctions.randomBool(),
    contacts: CommonFunctions.randomBool(),
    googlePlus: CommonFunctions.randomBool(),
    profile: CommonFunctions.randomBool(),
    search: CommonFunctions.randomBool(),
    drive: CommonFunctions.randomBool(),
    locations: CommonFunctions.randomBool(),
    keep: CommonFunctions.randomBool(),
    photos: CommonFunctions.randomBool(),
    passwords: CommonFunctions.randomBool(),
    hangouts: CommonFunctions.randomBool(),
    group: CommonFunctions.randomBool(),
  }
  return subservice;
}

const createICloudSubServices = () => {
  const subservice = {
    whatsApp: {
      active: CommonFunctions.randomBool(),
      messages: CommonFunctions.randomBool(),
      media: CommonFunctions.randomBool(),
    },
    contacts: CommonFunctions.randomBool(),
    calendars: CommonFunctions.randomBool(),
    completeDeviceBackup: CommonFunctions.randomBool(),
  }

  return subservice;
}

export const createSubServices = (service: TaskBasics.ServiceType) => {
  let subservice: AgentRun.GoogleSubServiceSwitches | AgentRun.CloudSubServiceSwitches;
  switch (service) {
    case 'Google':
      subservice = createGoogleSubServices();
      break;
    case 'iCloud':
      subservice = createICloudSubServices();
      break;
    default:
      break;
  }
  return subservice;
}

//////////////////////////////////////////////////
/////////////////////////////////////////////////

export const TASKS: Tasks.Task[] = [];

////////////////////////////////
// Create (editable) agent runs for each agent:
///////////////////////////////

const createAgentRunsByAgent = (agent: Agents.AgentData) => {
  const tasks: AgentRun.AgentRunData[] = [];

  const service = CommonFunctions.createServiceType();

  for (let index: number = 0; index < CommonFunctions.randomInt(30, 10); index++) {
    const id = CommonFunctions.getId();
    const name = CommonFunctions.taskNames[CommonFunctions.randomInt(CommonFunctions.taskNames.length - 1)];

    const subServices = createSubServices(service);
    const proxy = CommonFunctions.proxies[CommonFunctions.randomInt(CommonFunctions.proxies.length - 1)];
    const recurrence = createRecurrence();
    const activityPattern = createActivityPatternByRecurrence(recurrence);

    const agentRun = {
      id,
      name,
      agent,
      service,
      subServices,
      proxy,
      recurrence,
      activityPattern
    }

    tasks.push(agentRun);
  }

  // printAgentRuns(tasks);
  return tasks;
}

//
// Holds the final data structure, an array of the following interface:
//
interface AgentContainer {
  agentId: Agents.AgentId,
  agentRuns: AgentRun.AgentRunData[]
}

const AGENT_CONTAINERS: AgentContainer[] = [];

AgentMock.AGENTS.forEach(agent => {
  const agentRuns = createAgentRunsByAgent(agent);

  AGENT_CONTAINERS.push({
    agentId: agent.id,
    agentRuns: agentRuns,
  })
})
////////////////////////////////////////
//            DATA GETTERS:
////////////////////////////////////////

const getAgentContainerById =
  (agentId: Agents.AgentId) => AGENT_CONTAINERS.find(container => container.agentId === agentId);

export const getAgentRunsByAgentId = (agentId: Agents.AgentId) => {
  const container = getAgentContainerById(agentId);

  return container.agentRuns;
}

//////////////////////////////////////////////////
// To see mock data in the console uncomment this:
//////////////////////////////////////////////////

// console.log(printAgentRuns(getAgentRunsByAgentId('6')))
