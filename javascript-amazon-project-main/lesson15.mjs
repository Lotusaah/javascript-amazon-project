import dayjs from 'dayjs';

function dateFormat(date) {
  const finalDate = date.format('MM DD');
  return finalDate;
}

const day = dayjs();

//console.log(day);

const day2 = day.add(2, 'day');

const dayMinusMonth = day.subtract(1, 'month');

//console.log(dayMinusMonth);

//console.log(dateFormat(dayMinusMonth));

console.log(day.format('d'));

const weekDay = day.format('d');

const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const dayOfWeekLetter = week[weekDay];

console.log(dayOfWeekLetter);

// 15e
function isWeekend(date) {
  const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const weekDay = date.format('d');
  const dayOfWeekLetter = week[weekDay];
  if (dayOfWeekLetter === 'Saturday' || dayOfWeekLetter === 'Sunday') {
    console.log(dayOfWeekLetter);
  } else {
    console.log('not a sat or sun');
  };
};

isWeekend(day2);
// end 15e

