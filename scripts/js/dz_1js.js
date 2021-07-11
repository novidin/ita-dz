
function getData() {
  let name;
  let secondName;
  let lastName;
  let age;

  while (!lastName) {
    lastName = prompt('Введите вашу фамилию');
    if (!lastName) {
      alert('фамилия не введена, попробуйте еще раз');
    };
  };
  
  while (!name) {
    name = prompt('Введите ваше имя');
    if (!name) {
      alert('имя не введено, попробуйте еще раз');
    };
  };

  while (!secondName) {
    secondName = prompt('Введите ваше отчество');
    if (!secondName) {
      alert('отчество не введено, попробуйте еще раз');
    };
  };


  while (!age || isNaN(age) || age < 18 || age > 80) {
    age = prompt('Введите ваш возраст');
    if (!age) {
      alert('возраст не введен, попробуйте еще раз');
    };
    if (isNaN(age)) {
      alert('возраст введен не правильно, должно быть число, попробуйте еще раз');
    };
    if (age < 0) {
      alert('вы еще не родились, приходите попозже');
    };
    if (age < 18 && !isNaN(age) && age > 0) {
      alert('эта анкета 18+, подрастите немного');
    };
    if (age > 80) {
      alert('вы слишком стары, нет смысла продолжать...');
    };
  };

  let isMan = confirm('Вы мужчина?');

  let fullName = lastName + ' ' + name + ' ' + secondName;

  let sex = isMan ? 'мужской' : 'женский';

  let isPension = (age >= 65 || (age >= 63 && !isMan)) ? 'да' : 'нет'

 alert('ваше ФИО: ' + fullName + '\n' + 
      'ваш возраст в годах: ' + age + '\n' + 
      'ваш возраст в днях: ' + (age * 365) + '\n' + 
      'через 5 лет вам будет: ' + (parseInt(age) + parseInt(5)) + '\n' +
      'ваш пол: ' + sex + '\n' +
      'вы на пенсии: ' + isPension
      )  
};

getData();