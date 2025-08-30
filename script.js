const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }
  return count;
}

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Помилка: ділення на нуль!" : a / b;

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));

function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}

const helloMessage = i => `Привіт! Це повідомлення №${i + 1}`;
const indexMessage = i => `Зараз ітерація: ${i}`;
const emojiMessage = i => `✨ Повідомлення ${i + 1} ✨`;

repeatMessage(3, helloMessage);
repeatMessage(5, indexMessage);
repeatMessage(4, emojiMessage);

function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
}

const movies = [
  "Інтерстеллар",
  "Темний лицар",
  "Володар перснів",
  "Матриця",
  "Форрест Ґамп"
];

const printMovie = (movie, index) => console.log(`${index + 1}. ${movie}`);
const upperCaseMovie = (movie, index) => console.log(`Фільм ${index + 1}: ${movie.toUpperCase()}`);
const movieLength = (movie, index) => console.log(`"${movie}" має довжину ${movie.length} символів`);

console.log("\nСписок фільмів:");
processMovies(movies, printMovie);

console.log("\nНазви великими літерами:");
processMovies(movies, upperCaseMovie);

console.log("\nДовжина назв:");
processMovies(movies, movieLength);
