// Список курсов
let courses = [
  {name: "Courses in England", prices: [0, 100]},
  {name: "Courses in Germany", prices: [500, null]},
  {name: "Courses in Italy", prices: [100, 200]},
  {name: "Courses in Russia", prices: [null, 400]},
  {name: "Courses in China", prices: [50, 250]},
  {name: "Courses in USA", prices: [200, null]},
  {name: "Courses in Kazakhstan", prices: [56, 324]},
  {name: "Courses in France", prices: [null, null]},
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200]; // England, Italy, USA, France
let requiredRange2 = [100, 350]; // Italy, USA, France
let requiredRange3 = [200, null]; // Germany, Russia, USA, France

// Фильтр по диапазону цен
const filterByPrice = requiredRange => {
  if (requiredRange[0] === null) { // Если начальный диапазон не указан
    return courses.filter(course =>
      course.prices[0] <= requiredRange[1] &&
      course.prices[1] <= requiredRange[1]
    )
  } else if (requiredRange[1] === null) { // Если конечный диапазон не указан
    return courses.filter(course =>
      course.prices[0] >= requiredRange[0] &&
      course.prices[1] >= requiredRange[0]
      ||
      course.prices[0] === null // Если минимальная цена не указана, то нам подходят все варианты
      ||
      course.prices[0] >= requiredRange[0] &&
      course.prices[1] === null
    )
  } else { // Если оба диапазона указаны
    return courses.filter(course =>
      course.prices[0] >= requiredRange[0] &&
      course.prices[0] <= requiredRange[1] &&
      course.prices[1] <= requiredRange[1]
      ||
      course.prices[0] === null &&
      course.prices[1] === null
    )
  }
}

// Сортировка по возрастанию/убыванию минимальной цены
const sortByPrice = (courses, method) => {
  if (method === 'descending') { // Сортировка по убыванию
    return courses.sort((a, b) => b.prices[0] - a.prices[0])
  } else if (method === 'ascending') { // Сортировка по возрастанию
    return courses.sort((a, b) => a.prices[0] - b.prices[0])
  }
}

// Вывод результатов в консоль
console.log(requiredRange1, sortByPrice(filterByPrice(requiredRange1), 'ascending'))
console.log(requiredRange2, sortByPrice(filterByPrice(requiredRange2), 'ascending'))
console.log(requiredRange3, sortByPrice(filterByPrice(requiredRange3), 'ascending'))

console.log(requiredRange1, sortByPrice(filterByPrice(requiredRange1), 'descending'))
console.log(requiredRange2, sortByPrice(filterByPrice(requiredRange2), 'descending'))
console.log(requiredRange3, sortByPrice(filterByPrice(requiredRange3), 'descending'))
