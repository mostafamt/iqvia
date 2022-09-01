console.log("hello node");

const data = {
  size: [
    { id: 1, name: "ahmed" },
    { id: 2, name: "ahmed" },
  ],
  color: [
    { id: 1, name: "ahmed" },
    { id: 2, name: "ahmed" },
  ],
};

// console.log(data["size"]);

const array = ["size", "color", "brand"];

let data1 = {};

function insert() {
  array.forEach((a) => {
    data1 = { ...data1, [a]: [] };
  });
}

insert();

// console.log(data1);

function addObject(object, parent) {
  data[parent].push(object);
}

function removeObject(object, parent, idx) {
  let arr = data[parent];
  const out = arr.filter((a, ind) => {
    return a.id !== idx;
  });
  data[parent] = out;
}

const myObj = { id: 4, name: "mostafa" };

addObject(myObj, "size");
// console.log(data);

removeObject(myObj, "size", 4);
// console.log(data);

console.log(data);

function check(a) {
  // let state = false;
  return a.some((el) => {
    console.log(el);
    return el === 22;
  });
  // a.forEach((el) => {
  //   console.log(el);
  //   if (el === 100) state = state || true;
  // });
  // return state;
}

const a = [1, 22, 3, 4, 4, 3, 4];
console.log(check(a));
