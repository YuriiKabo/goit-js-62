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
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }

  message = "НЕт!";
}

console.log(message); */

/* const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
 */
/* const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "apple";
// Проверяем наличие элемента
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
  const answer = prompt("Какое официальное название JavaScript?");
  if (answer === "ECMAScript") {
    alert("Верно!");
  } else {
    alert("Не знаете? ECMAScript!");
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

console.log(slugify("Не знаете? ECMAScript"));
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

/* Напишите функцию caclculateAverage()
которая принимает произвольное количество
аргументов и возвращает их среднее значение.
Добавить проверку, что аргументы это числа. */

/* const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
} */

/* function caclculateAverage1(order) {
  let total = 0;

  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total += order[i] /= order.length;
    if (Number.isNaN(order[i])) {
      return "Аргументи мають інші символи окрім чисел!";
    }
  }
  return `Середнє арифметичне ${total}`;
}
console.log(caclculateAverage1(["w1", 27, 2]));
console.log(caclculateAverage1([5, 23, 47])); */

/* function avg() {
  let sum = 0;

  for (let i = 0; i < arguments[i]; i += 1) sum += arguments[i];
  {
    sum = 0 ? sum : sum / arguments.length;
  }
  return sum;
}

console.log(avg(1, 2, "w", "f")); */

function findLongestWord(string) {
  let line = string.split(" ");
  for (let i = 0; i < string.length; i += 1) {
    line = line[i];
  }
  return line;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
