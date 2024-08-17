/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(e =>{
    if(e.profession === "developer"){
      console.log(e);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(e => {
    if(e.profession === "developer"){
      console.log(e);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {id:4, name: "susan", age: "20", profession: "intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = arr.filter(e => e.profession !== "admin");
  console.log(filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmp = [
    {id: 4, name: "alice", age: "22", profession: "manager" },
    {id: 5, name: "bobydeol", age: "25", profession: "developer" },
    {id: 6, name: "babulal", age: "23", profession: "designer" }
  ];

  const concatenateArray = arr.concat(newEmp);
  console.log(concatenateArray);
}
