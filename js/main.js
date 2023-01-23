const items = [
  {
    id: 1,
    task: "buy milk",
    done: false,
    priority: 1,
    dueDate: "2022-01-15",
  },
  {
    id: 2,
    task: "buy cola",
    done: true,
    priority: 0,
    dueDate: "2022-01-20",
  },
  {
    id: 3,
    task: "buy chocolate",
    done: false,
    priority: 3,
    dueDate: "2022-02-05",
  },
];

const chooseAction = (input) => {
  // 1- addItem
  // 2 - remove
  // ...
  // 1// input type is a number
};

const addItem = (input) => {};
const markAsDone = (input) => {};
const removeItem = (input) => {};
const displayItems = (input) => {};
const sortBy = (input) => {
  if (input === "dueDate") {
    items.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (input === "id") {
    items.sort((a, b) => a.id-b.id);
  } else if (input === "priority") {
    items.sort((a, b) => a.priority - b.priority);
  } else {
    console.log("Invalid sort parameter!");
  }
  console.log("List sorted!");
};
sortBy("dueDate");
console.log(items);

const search = (input) => {};
