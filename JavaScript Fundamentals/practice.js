function displayData(lastName, age) {
  console.log(this.firstName + " " + lastName + age);
}
let callObj = {
  firstName: "Somnath Call",
};

displayData.call(callObj, "Shinde call", 30);

let applyObj = {
  firstName: "Somnath Apply",
};

displayData.apply(applyObj, ["Shinde Apply", 30]);

let bindObj = {
  firstName: "Somnath Bind",
};

let bindfun = displayData.bind(bindObj, "shinde bind", 30);
bindfun();

let [name, ...data] = ["somnath", "shinde", 31, "adhegan"];
let copy = [...data];

let { name, age, ...dataObj } = {
  name: "Somnath",
  lastName: "Shinde",
  age: 31,
  addree: "adhegaon",
};

let { orgName } = { ...dataObj, orgName: "Citi" };

let promice = new Promise((resolve, reject) => {
  let responce = "success";
  if (responce == "success") {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

promice
  .then((data) => {
    console.log("First Then:", data);
  })
  .then((data) => {
    console.log("Secoond Then:", data);
  })
  .catch((error) => {
    console.log(error);
  });

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.sort((a, b) => b - a);

arr.find((a) => a == 5);

arr.filter((a) => a < 5);

arr.findIndex((a) => a == 8);

arr.reverse();

arr.slice(0, 5);

arr.splice(0, 1, 2);

arr.join(",");

let str = "hello Somnath Shinde how are you?";

str.concat("nice to talk to you");

str.split(" ");

str.includes("hello");

str.startsWith("hello");

str.endsWith("you");

str.indexOf("hello");

str.padEnd(statusbar.length + 4, "*");

str.padStart(str.length + 4, "*");

str.replace("hello", "by");

str.replaceAll("you", "how");

str.trim();
str.trimEnd();
str.trimStart();

str.match();

str.substring(0, 5);

let obj = {
  name: "Somnath Shinde",
  age: "31",
  phone: "9665229855",
};

let [key, value] = Object.entries(obj)[0];

let key = obj.key(obj);

let value = obj.value(obj);

let newObj = Object.create(obj, { address: { value: "adhegaon" } });

Object.freeze(newObj);

Object.seal(newObj);

Object.isExtendable(newObj);

let person = {};

Object.defineProperty(person, "phone", {
  value: "9665229855",
  enumerable: true,
  writable: false,
  configurable: false,
});

let baseObj = {
  greet() {
    console.log("Hello from baseObj!");
  },
};

let newObj = Object.create(baseObj, {
  name: {
    value: "Somnath",
    enumerable: true,
    writable: false,
    configurable: false,
  },
  age: {
    value: 31,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

/*
Context | How this behaves
Regular Function | Depends on how the function is called
Arrow Function | Lexically bound (this is taken from outer context)
setTimeout / setInterval with regular fn | this points to global (not parent obj)
setTimeout / setInterval with arrow fn | this is preserved from the surrounding scope

*/

let map = new Map();

map.set(1, "Somnath");
map.set(2, "Shinde");
map.get(1);
map.has(2);
map.clear();
map.entries();
map.keys();
map.delete(1);

let set = new Set();

set.add(5);
set.add(8);
set.has(5);
set.delete(5);
set.clear();

let setTime = setTimeout(() => {
  console.log("data set data");
}, 1000);

let setIntreval = setInterval(() => {
  console.log("data interval");
}, 1000);
