// Syntax
let obj = new Object();
let obj1 = {};

let obj2 = {
  name: "Peter Parker",
  age: "28",
  isMarried: () => "Yes",
  wifeName: () => "Mary Jane Watson",
  wife: {
    name: "Mary Jane Watson",
    age: "25",
    DOB: "01/01/2000",
  },
};

const nestedObj = {
  user: {
    name: "John",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

function flatObj(iObj, parentKey = "", resultObj = {}) {
  for (let key of Object.keys(iObj)) {
    //const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof iObj[key] === "object" &&
      iObj[key] !== null &&
      !Array.isArray(iObj[key])
    ) {
      flatObj(iObj[key], newKey, resultObj); // Pass parent key and same resultObj
    } else {
      resultObj[newKey] = iObj[key];
    }
  }
  return resultObj;
}

const output = flatObj(nestedObj);
console.log(output);
