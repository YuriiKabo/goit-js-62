/* function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}
console.log(makeMessage("Radar", 6150));
console.log(makeMessage("Scanner", 3500));
console.log(makeMessage("Reactor", 8000));
console.log(makeMessage("Engine", 4070)); */

/* function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}
console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70)); */

/* function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;
  return message;
}
console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200)); */

/* function isAdult(age) {
  const passed = age >= 18;
  return passed;
} */
/* function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === 'jqueryismyjam';

  // Change code above this line
  return isMatch;
} */

/* function checkAge(age) {
  let message;

  if (age >= 18) {
    message = 'You are an adult';
  } 
  else {
    message = 'You are a minor';
  }

  return message;
} */

/* function checkStorage(available, ordered) {
  let message;
  if (available < ordered) {
    message = "Not enough goods in stock!";
  } else {
    message = "Order is processed, our manager will contact you.";
  }

  return message;
} */

/* function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;

  const totalPrice = pricePerDroid * orderedQuantity;

  if (totalPrice >= customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(5000, 10, 8000)); */

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === "jqueryismyjam") {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
} */

/* function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  }
  if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  }
  if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  }
  if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }
  return discount;
} */

/* let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}
console.log(type); // "adult"
 */

/* const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult" */

/* letfunction checkStorage(available, ordered) {
   message;
  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  } */

/* function checkStorage(available, ordered) {
  let message;
  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";

  return message;
}
console.log(checkStorage(33, 3)); */

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : "Access denied, wrong password!";

  return message;
} */

/* function getSubscriptionPrice(type) {
  let price;
  switch (type) {
    case "professional":
      price = 20;
      break;
    case "organization":
      price = 50;
      break;
    case "starter":
      price = 0;
      break;
  }
  return price;
} */

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;

    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;

    default:
      message = "Access denied, wrong password!";
  }
  return message;
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("urtr"));
console.log(checkPassword(null)); */

/* function getShippingCost(country) {
  let price;
  let message;
  switch (country) {
    case "China":
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
      message;
    case "Chile":
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Australia":
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Jamaica":
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  return message;
}
console.log(getShippingCost("China")); */

/* function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
} */

/* const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement); */

/* function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}
console.log(getSubstring("hello world", 8)); */

/* function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(input);

  return normalizedInput;
} */

/* function checkForName(fullName, name) {
  const result = fullName.includes(name);
   return result;
 } */

/* function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase(message);
  let result;
  if (normalizedMessage.includes("sale")) {
    result = true;
  } else if (normalizedMessage.includes("spam")) {
    result = true;
  } else if (normalizedMessage) {
    result = false;
  }
  return result;
}
console.log(checkForSpam("Amazing , only tonight!")); */

/* const clientsq = ["Mango", "Ajax", "Poly"];

for (const clientwww of clientsq) {
  console.log(clientwww);
} */

/* const string = "javascript";

for (const character of string) {
  console.log(character);
} */
/* const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Ajax";
let message;

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "???????????? ?? ?????????? ???????????? ???????? ?? ???????? ????????????!";
    break;
  }

  message = "??????!";
}

console.log(message); */

/* const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// ?????? ?????????? ???????????? ?????? ?????????? ?????????????????????? continue, ???????????????????? ???????? ????????????????????????
// ?? ???????????????????? ???????????????????? ???? ?????????????????? ????????????????.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`?????????? ???????????? ?????? ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
 */
/* const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "apple";
// ?????????????????? ?????????????? ????????????????
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
} else if (redFruits !== hasFruit) {
  console.log(`${fruit} NOT a red fruit!`);
} */

/* const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); */

/* function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120 */

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  } 
  return "Access denied, wrong password!";
  // Change code above this line
}
 */

/* function checkStorage(available, ordered) {
  // Change code below this line
 
  if (ordered === 0) {
    return "Your order is empty!";
  } if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 

  return "The order is accepted, our manager will contact you";
  // Change code above this line
} */

/* function fn() {
  const answer = prompt("?????????? ?????????????????????? ???????????????? JavaScript?");
  if (answer === "ECMAScript") {
    alert("??????????!");
  } else {
    alert("???? ????????????? ECMAScript!");
  }
  console.log(answer);
}
fn(); */

/* function slugify(title) {
  // Change code below this line

  const slug = title.toLowerCase().split(" ").join("-");
  return slug;
  // Change code above this line
}

console.log(slugify("???? ????????????? ECMAScript"));
 */

/* const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3); */

/* function makeArray(firstArray, secondArray, maxLength) {
  let allArray = firstArray.concat(secondArray).slice(0, maxLength);

  return allArray;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); */

/* for (let i = 0; i <= 20; i += 5) {
  console.log(i);
} */
/* function calculateTotal(number) {
  for (let i = 1; i <= number; i += 1) {
    return i;
  }
}
console.log(calculateTotal(4)); */

/* ???????????????? ?????????????? caclculateAverage()
?????????????? ?????????????????? ???????????????????????? ????????????????????
???????????????????? ?? ???????????????????? ???? ?????????????? ????????????????.
???????????????? ????????????????, ?????? ?????????????????? ?????? ??????????. */

/* const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
} */

/* function caclculateAverage1(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1) {
    total += order[i] /= order.length;
    if (Number.isNaN(order[i])) {
      return "?????????????????? ?????????? ???????? ?????????????? ?????????? ??????????!";
    }
  }
  total = Math.round(total * 10) / 10;
  return `?????????????? ?????????????????????? ???????????? "caclculateAverage1" ???????????????? ${total}`;
}
console.log(caclculateAverage1([3, "3w1", 3]));
console.log(caclculateAverage1([9, 2, 8])); */

/* let quantity = prompt("?????????????? ???????????????????? ??????????????!");
quantity = Number(quantity);
quantity = Number.isNaN(quantity);
console.log(!quantity); */

/* function avg() {s
  let sum = 0;

  for (let i = 0; i < arguments[i]; i += 1) sum += arguments[i];
  {
    sum = 0 ? sum : sum / arguments.length;
  }
  return sum;
}

console.log(avg(1, 2, "w", "f")); */

/* function findLongestWord(string) {
  let line = string.split(" ");
  for (let i = 0; i < string.length; i += 1) {
    line = line[i];
  }
  return line;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); */

/* function findLongestWord(string) {
  string = string.split(" ");
  let maxLongWord = string[0];
  for (let word of string) {
    if (word.length > maxLongWord.length) {
      maxLongWord = word;
    }
  }
  return maxLongWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); */

/* function createArrayOfNumbers(min, max) {
  const numbers = [];

   for (let i = min; i <= max; i++) {
  numbers.push(i);
   }

  return numbers;
} */

/* function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}
console.log(checkFruit("apple")); */

/* function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
} */

/* function getEvenNumbers(start, end) {
  const numbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }
  return numbers;
} */

/* function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
} */

/* function includes(array, value) {

  const filteredNumbers = [];
    for (let number of array) {
      if (number === value) {
        return true;
      } 
    }
    return false;
  }  */
/* const moyaCard = 804;
const payoneer = 36625;
const nalPayoneer = 4000;
const NMAPO = 5600;
const eat = -4000;
const lviv = -3000;
const videocard = -14500;
const artem = -8000;
const yurii = -8000;
const rest = -461;
const ostatokCard = 12097;

const total =
  moyaCard +
  payoneer +
  nalPayoneer +
  NMAPO +
  artem +
  eat +
  lviv +
  videocard +
  yurii +
  rest -
  ostatokCard;
console.log(total); */

/* function caclculateAverage(order) {
  let total = 0;
  let length = order.length;
  let nan = false;

  for (let i = 0; i < order.length; i += 1) {
    if (isNaN(order[i])) {
      length -= 1;
      nan = true;
    } else {
      total += order[i];
    }
  }
  let average = total / length;
  average = Math.round(average * 10) / 10;

  if (nan) {
    return `?????????????? ?????????????????????? ???????????? ???????????????? ${average}, 
    ?????? ?? ?????????? ???????????????? ???????? ?????????????? ?????????? ??????????, ?????? ???????? ????????????????`;
  } else {
    return `?????????????? ?????????????????????? ???????????? ???????????????? ${average}`;
  }
}
console.log(caclculateAverage(["2", 0, 0]));
console.log(caclculateAverage([12, 2, 8])); */

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "??????????";

// console.log(dog); // {name: '??????????'}
// console.log(dog.name); // '??????????'
// console.log(dog.legs); // 4

/* const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4
console.log(animal); */

/* function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries);
  for (let i = 0; i < values.length; i += 1) {
    totalSalary += values[i];
  }
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); */

// ???????????? ?????????????? getAllPropValues(propName) ?????????????? ??????????????????
// ???????? ???????????????? propName - ?????? (????????) ????????????????. ?????????????? ????????????
// ?????????????? ???????????? ???????? ???????????????? ???????????????? ?? ?????????? ???????????? ???? ??????????????
// ?????????????? ?? ?????????????? products. ???????? ?? ???????????????? ?????? ???????????????? ?? ?????????? ????????????,
// ?????????????? ???????????? ?????????????? ???????????? ????????????.
// ?????????????????? ????????????????

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let price = [];
  for (let product of products) {
    let num = product[propName];
    if (num) {
      price.push(num);
    }
  }
  return price;
}
console.log(getAllPropValues("quantity")); */

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let total = 0;
  for (let product of products) {
    if (product.name === productName) {
      total = product.price * product.quantity;
    }
  }
  return total;
}
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Radar")); */

/* const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast; */
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

/* function addOverNum(firstArg, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstArg) {
      total += arg;
    }
  }
  return total;
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8)); */

/* function findMatches(array, ...args) {
  const matches = []; // Don't change this line
for (let arg of array) {
  if(args.includes(arg)) {
    matches.push(arg);
  };
}
  // Change code above this line
  return matches;
} */
/* const bookShelf = {
  books: [10, 20, 30],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);

    return this.books;
    // Change code above this line
  },
};
console.log(bookShelf.updateBook(10, "????????", "??????????")); */

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    const potionNameIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionNameIndex, 1);
    return this.potions;
  },
};
console.log(atTheOldToad.removePotion("Dragon breath"));
 */

/* const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let potion of this.potions) {
      const potionIndex = this.potions.indexOf(potion);
      if (potion.name === potionName) {
        this.potions.splice(potionIndex, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        // this.potions.splice(potion, 1, newName);
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
}; */
/* function processCall(recipient, onAvailable, onNotAvailable) {
  // ?????????????????? ?????????????????????? ???????????????? ?????????????????? ????????????
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`?????????????????? ?? ${name}, ????????????????...`);
  // ???????????? ???????????????? ????????????
}

function activateAnsweringMachine(name) {
  console.log(`?????????????? ${name} ????????????????????, ???????????????? ??????????????????.`);
  // ???????????? ?????????????????? ??????????????????????????
}

function leaveHoloMessage(name) {
  console.log(`?????????????? ${name} ????????????????????, ???????????????????? ????????????????????.`);
  // ???????????? ???????????? ????????????????????
}

processCall("??????????", takeCall, activateAnsweringMachine);
processCall("????????", takeCall, leaveHoloMessage); */

/* function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(11); */

/* const numbers = [5, 10, 15, 20, 25];

// ???????????????????? ??????????????
numbers.forEach(function (number, index) {
  console.log(`???????????? ${index}, ???????????????? ${number}`);
});

// ?????????????????? ???????????????????? ??????????????
numbers.forEach((number, index) => {
  console.log(`???????????? ${index}, ???????????????? ${number}`);
}); */

// ????????????-??????????????
/* function greet(name) {
  consle.log(`?????????? ???????????????????? ${name}.`);
}

// ?????????????? ?????????????? ??????????????
function registerGuest(name, callback) {
  console.log(`???????????????????????? ?????????? ${name}.`);
  callback(name);
}

registerGuest("Mango", greet); */
/* const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2);
console.log(evenNumbers);
console.log(oddNumbers); */

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];
const getInactiveUsers = (users) =>
  users.filter((user) => user.isActive === true);

user.isActive(); */

class Storage {
  constructor({ items }) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    Storage.items.push(newItem);
  }
  removeItem(itemToRemove) {
    let itemIndex = this.items.indexOf(itemToRemove);
    this.items.splice(itemIndex, 1);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
