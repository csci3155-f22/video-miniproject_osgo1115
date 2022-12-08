import MyPromise from "./MyPromise";

interface UserData {
  name: string;
  age: number;
}

let myData: UserData = {
  name: "sam",
  age: 21,
};

function validateUser(userData: UserData) {
  if (userData.age >= 21) return true;
  return false;
}

function registerUser(userData: UserData) {
  return new MyPromise((resolve: Function, reject: Function) => {
    if (validateUser(myData)) resolve("Success!");
    reject("Failed");
  });
}

registerUser(myData)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
