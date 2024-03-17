class Lesson {
  static TYPES = {
    LECTURE: 'LECTURE',
    LAB: 'LAB',
    PRACTICE: 'PRACTICE',
  };

  constructor({ name, type, students = [], startedAt, endsAt }) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.type = type;
    this.students = students;
    this.startedAt = startedAt;
    this.endsAt = endsAt;
  }
}

const english = new Lesson({
  name: 'english',
  type: Lesson.TYPES.LECTURE,
  students: [],
  startedAt: '9:40',
  endsAt: '11:00',
});
const algorithmizationLab = new Lesson({
  name: 'algorithmization',
  type: Lesson.TYPES.LAB,
  students: [],
  startedAt: '11:20',
  endsAt: '12:40',
});
const mathLecture = new Lesson({
  name: 'math',
  type: Lesson.TYPES.LECTURE,
  students: [],
  startedAt: '9:40',
  endsAt: '11:00',
});
const discreteLecture = new Lesson({
  name: 'discreteMath',
  type: Lesson.TYPES.LECTURE,
  students: [],
  startedAt: '11:20',
  endsAt: '12:40',
});
const discretePractice = new Lesson({
  name: 'discreteMath',
  type: Lesson.TYPES.PRACTICE,
  students: [],
  startedAt: '13:00',
  endsAt: '14:20',
});
const dataStructuresLecture = new Lesson({
  name: 'dataStructures',
  type: Lesson.TYPES.LECTURE,
  students: [],
  startedAt: '8"00',
  endsAt: '9:20',
});
const algorithmizationLecture = new Lesson({
  name: 'algorithmization',
  type: Lesson.TYPES.LECTURE,
  students: [],
  startedAt: '9:40',
  endsAt: '11:00',
});
const physicsLecture = new Lesson({
  name: 'physics',
  type: Lesson.TYPES.LECTURE,
  students: [],
  startedAt: '11:20',
  endsAt: '12:40',
});
const computerGraphicsLab = new Lesson({
  name: 'computerGraphics',
  type: Lesson.TYPES.LAB,
  students: [],
  startedAt: '13:00',
  endsAt: '14:20',
});
const mathPractice = new Lesson({
  name: 'math',
  type: Lesson.TYPES.PRACTICE,
  students: [],
  startedAt: '9"40',
  endsAt: '11:00',
});
const physicsLab = new Lesson({
  name: 'physics',
  type: Lesson.TYPES.LAB,
  students: [],
  startedAt: '11:20',
  endsAt: '12:40',
});
const dataStructuresLab = new Lesson({
  name: 'dataStructures',
  type: Lesson.TYPES.LAB,
  students: [],
  startedAt: '8:00',
  endsAt: '9:20',
});

const lessons = {
  english,
  algorithmizationLab,
  mathLecture,
  discreteLecture,
  discretePractice,
  dataStructuresLecture,
  algorithmizationLecture,
  physicsLecture,
  computerGraphicsLab,
  mathPractice,
  physicsLab,
  dataStructuresLab,
};

module.exports = { lessons };
