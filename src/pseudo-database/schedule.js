const { lessons } = require('./lessons');

class Schedule {
  constructor({ day, lessons = [], variant }) {
    this.id = crypto.randomUUID();
    this.day = day;
    this.lessons = lessons;
    this.variant = variant;
  }
}

const sheduleVariantOne = [];
const sheduleVariantTwo = [];

const mondayScheduleVOne = new Schedule({
  day: 'monday',
  lessons: [lessons.english, lessons.algorithmizationLab],
  variant: 1,
});

const tuesdayScheduleVOne = new Schedule({
  day: 'tuesday',
  lessons: [
    lessons.mathLecture,
    lessons.discreteLecture,
    lessons.discretePractice,
  ],
  variant: 1,
});

const wednesdayScheduleVOne = new Schedule({
  day: 'wednesday',
  lessons: [
    lessons.dataStructuresLecture,
    lessons.algorithmizationLecture,
    lessons.physicsLecture,
    lessons.computerGraphicsLab,
  ],
  variant: 1,
});

const thursdayScheduleVOne = new Schedule({
  day: 'thursday',
  lessons: [lessons.mathPractice, lessons.physicsLab],
  variant: 1,
});

const fridayScheduleVOne = new Schedule({
  day: 'friday',
  lessons: [lessons.dataStructuresLab],
  variant: 1,
});

sheduleVariantOne.push(
  mondayScheduleVOne,
  tuesdayScheduleVOne,
  wednesdayScheduleVOne,
  thursdayScheduleVOne,
  fridayScheduleVOne,
);

const mondayScheduleVTwo = new Schedule({
  day: 'monday',
  lessons: [lessons.english, lessons.algorithmizationLab],
  variant: 1,
});

const tuesdayScheduleVTwo = new Schedule({
  day: 'tuesday',
  lessons: [
    lessons.mathLecture,
    lessons.discreteLecture,
    lessons.discretePractice,
  ],
  variant: 1,
});

const wednesdayScheduleVTwo = new Schedule({
  day: 'wednesday',
  lessons: [
    lessons.dataStructuresLecture,
    lessons.algorithmizationLecture,
    lessons.physicsLecture,
  ],
  variant: 1,
});

const thursdayScheduleVTwo = new Schedule({
  day: 'thursday',
  lessons: [lessons.mathPractice, lessons.physicsLab],
  variant: 1,
});

const fridayScheduleVTwo = new Schedule({
  day: 'friday',
  lessons: [lessons.dataStructuresLab, lessons.computerGraphicsLab],
  variant: 1,
});

sheduleVariantTwo.push(
  mondayScheduleVTwo,
  tuesdayScheduleVTwo,
  wednesdayScheduleVTwo,
  thursdayScheduleVTwo,
  fridayScheduleVTwo,
);
