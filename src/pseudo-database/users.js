class User {
  constructor({ firstName, lastName, username = '' }) {
    this.id = crypto.randomUUID();
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
  }
}

const student1 = new User({
  firstName: 'Бедя',
  lastName: 'Владислав',
  username: '@Sezostris',
});
const student2 = new User({
  firstName: 'Беллас',
  lastName: 'Євгеній',
  username: '',
});
const student3 = new User({
  firstName: 'Бобонич',
  lastName: 'Максим',
  username: '@Incstore13',
});
const student4 = new User({
  firstName: 'Боднарук',
  lastName: 'Максим',
  username: '',
});
const student5 = new User({
  firstName: 'Боровська',
  lastName: 'Владислава',
  username: '@Nasha0_3',
});
const student6 = new User({
  firstName: 'Бурч',
  lastName: 'Аліна',
  username: '',
});
const student7 = new User({
  firstName: 'Висоцький',
  lastName: 'Ельдар',
  username: '',
});
const student8 = new User({
  firstName: 'Габода',
  lastName: 'Анастасія',
  username: '',
});
const student9 = new User({
  firstName: 'Гарвилюк',
  lastName: 'Арсен',
  username: '',
});
const student10 = new User({
  firstName: 'Гопак',
  lastName: 'Вікторія',
  username: '',
});
const student11 = new User({
  firstName: 'Греба',
  lastName: 'Мартіна',
  username: '',
});
const student12 = new User({
  firstName: 'Даценко',
  lastName: 'Ангеліна',
  username: '',
});
const student13 = new User({
  firstName: 'Жук',
  lastName: 'Анна',
  username: '',
});
const student14 = new User({
  firstName: 'Заплетнюк',
  lastName: 'Сергій',
  username: '',
});
const student15 = new User({
  firstName: 'Іванчо',
  lastName: 'Богдан',
  username: '',
});
const student16 = new User({
  firstName: 'Кабацій',
  lastName: 'Василь',
  username: '',
});
const student17 = new User({
  firstName: 'Колосов',
  lastName: 'Ярослав',
  username: '',
});
const student18 = new User({
  firstName: 'Копитчак',
  lastName: 'Роман',
  username: '',
});
const student19 = new User({
  firstName: 'Котубей',
  lastName: 'Богдан',
  username: '',
});
const student20 = new User({
  firstName: 'Коцаба',
  lastName: 'Едуард',
  username: '',
});
const student21 = new User({
  firstName: 'Кучірка',
  lastName: 'Максим',
  username: '',
});
const student22 = new User({
  firstName: 'Лагута',
  lastName: 'Михайло',
  username: '',
});
const student23 = new User({
  firstName: 'Леньо',
  lastName: 'Максим',
  username: '',
});
const student24 = new User({
  firstName: 'Лийнарт',
  lastName: 'Максим',
  username: '',
});
const student25 = new User({
  firstName: 'Магула',
  lastName: 'Євгенія',
  username: '',
});
const student26 = new User({
  firstName: 'Маргітич',
  lastName: 'Валентин',
  username: '',
});
const student27 = new User({
  firstName: 'Марина',
  lastName: 'Павел',
  username: '',
});
const student28 = new User({
  firstName: 'Мондич',
  lastName: 'Михайло',
  username: '',
});
const student29 = new User({
  firstName: 'Москаленко',
  lastName: 'Валерія',
  username: '',
});
const student30 = new User({
  firstName: 'Опріш',
  lastName: 'Іван',
  username: '',
});
const student31 = new User({
  firstName: 'Павлюк',
  lastName: 'Тіна',
  username: '',
});
const student32 = new User({
  firstName: 'Перебзяк',
  lastName: 'Владислав',
  username: '',
});

const students = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
  student11,
  student12,
  student13,
  student14,
  student15,
  student16,
  student17,
  student18,
  student19,
  student20,
  student21,
  student22,
  student23,
  student24,
  student25,
  student26,
  student27,
  student28,
  student29,
  student30,
  student31,
  student32,
];

module.exports = { students };
