const fs = require('node:fs/promises');

async function createSchedule() {
  const workingDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const subjects = [''];
  const timePeriod = [];
  // let res = ''
  for (let i = 0; i < 5; i++) {
    const start = 8;
    const lessonTime = 1.2;
    const delay = 0.2;
    timePeriod.push({});

    console.log();
  }
  const result = workingDays;
  return JSON.stringify(result);
}
async function main() {
  await fs.writeFile('./script.js');
}
// main();

const schedule = [
  {
    id: 'mon1',
    lesson: 'Foreign Language',
    room: '108',
    type: '',
    startsAt: new Date('2024-03-11T09:40:00'),
    endsAt: new Date('2024-03-11T11:00:00'),
  },
  {
    id: 'mon2',
    lesson: 'Algorithms and Programming (Lab)',
    room: '256',
    type: '',
    startsAt: new Date('2024-03-11T11:20:00'),
    endsAt: new Date('2024-03-11T12:40:00'),
  },
  {
    id: 'tue1',
    lesson: 'Mathematical Analysis ',
    room: '152',
    type: 'lecture',
    startsAt: new Date('2024-03-12T09:40:00'),
    endsAt: new Date('2024-03-12T11:00:00'),
  },
  {
    id: 'tue2',
    lesson: 'Discrete Mathematics ',
    room: '152',
    type: 'lecture',
    startsAt: new Date('2024-03-12T11:20:00'),
    endsAt: new Date('2024-03-12T12:40:00'),
  },
  {
    id: 'wed1',
    lesson: 'Algorithms and Data Structures ',
    room: '152',
    type: 'lecture',
    startsAt: new Date('2024-03-13T08:00:00'),
    endsAt: new Date('2024-03-13T09:20:00'),
  },
  {
    id: 'wed2',
    lesson: 'Algorithms and Programming ',
    room: 'Conference Hall',
    type: 'lecture',
    startsAt: new Date('2024-03-13T09:40:00'),
    endsAt: new Date('2024-03-13T11:00:00'),
  },
  {
    id: 'wed3',
    lesson: 'Physics ',
    room: '152',
    type: 'lecture',
    startsAt: new Date('2024-03-13T11:20:00'),
    endsAt: new Date('2024-03-13T12:40:00'),
  },
  {
    id: 'wed4',
    lesson: 'Discrete Mathematics (Practical)',
    room: '103',
    type: '',
    startsAt: new Date('2024-03-13T13:00:00'),
    endsAt: new Date('2024-03-13T14:20:00'),
  },
  {
    id: 'thu1',
    lesson: 'Mathematical Analysis (Practical)',
    room: '102',
    type: '',
    startsAt: new Date('2024-03-14T09:40:00'),
    endsAt: new Date('2024-03-14T11:00:00'),
  },
  {
    id: 'thu2',
    lesson: 'Physics (Lab)',
    room: '256',
    type: '',
    startsAt: new Date('2024-03-14T11:20:00'),
    endsAt: new Date('2024-03-14T12:40:00'),
  },
  {
    id: 'fri1',
    lesson: 'Algorithms and Data Structures (Lab)',
    room: 'K/3 1.3',
    type: '',
    startsAt: new Date('2024-03-15T08:00:00'),
    endsAt: new Date('2024-03-15T09:20:00'),
  },
  {
    id: 'fri2',
    lesson: 'Computer Graphics (Lab)',
    room: '255',
    type: '',
    startsAt: new Date('2024-03-15T13:00:00'),
    endsAt: new Date('2024-03-15T14:20:00'),
  },
];
