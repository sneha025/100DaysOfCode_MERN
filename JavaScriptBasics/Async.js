// Asynchronus await and promises
let promise = new Promise((resolve, reject) => {
  //Promise  constructor
  let a = 3 + 2;
  if (a == 5) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

/** 
 use the promise 
 when the process is success full it goes in then , 
 else it goes in catch

 **/

promise
  .then((message) => {
    console.log("This is in the Than" + message);
  })
  .catch((message) => {
    console.log("this is in the catch" + message);
  });
