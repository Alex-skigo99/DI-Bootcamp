// ------------- without waiting data from getMeat ------------------ 
// const makeBurger = () => {
//     const meatType = getMeat();
//     const bunsType = getBuns();
//     const burger = putMeatBetwenBuns(bunsType, meatType);
//     return burger;
// };

// function getMeat() {
//     console.log("walking to the butcher...");
//     setTimeout(() => {
//         console.log("getting the beef from the butcher");
//         return "beef"
//     }, 2000);
// }

// function getBuns() {
//     console.log("getting the buns from the bakery");
//     return "whole grain";
// }


// function putMeatBetwenBuns(bunsType, meatType) {
//     console.log(`creating the ${meatType} burger with ${bunsType} buns`);
//     return "Delicious Burger"
// }

// const burger = makeBurger();
// console.log(burger);


// --------------- waiting data from getMeat by callback HELL ---------------

// function getMeat(callback) {
//     console.log("walking to the butcher...");
//     setTimeout(() => {
//         console.log("getting the beef from the butcher");
//         callback("beef");
//     }, 2000);
// }

// function getBuns(callback) {
//     console.log("getting the buns from the bakery");
//     callback("whole grains");
// }


// function putMeatBetwenBuns(bunsType, meatType, callback) {
//     console.log("preparing the burger...");
//     callback(`The ${meatType} burger with ${bunsType} buns is created`)
// }

// const makeBurger = () => {
//     getMeat((meatType) => {
//         getBuns((bunsType) => {
//             putMeatBetwenBuns(bunsType, meatType, (finalBurger) => {
//                 console.log(finalBurger);
//             })
//         })
//     })
// }

// const burger = makeBurger();


// ------------ use Promise for waiting data ---------------

// function startBurger() {
//     return new Promise((resolve, reject) => {
//         console.log("walking to the butcher...");
//         setTimeout(() => {
//             console.log("getting the beef from the butcher");
//             resolve("beef");
//         }, 2000)
//     })
// }

// startBurger()
//     .then(meatType => {
//         console.log("getting the buns from the bakery");
//         return [meatType, "whole grains"];
//     })
//     .then(([bunsType, meatType]) => {
//         console.log("preparing the burger...");
//         console.log(`The ${meatType} burger with ${bunsType} buns is created`);
//     })

// ------- Example ----------------

// let goodGrades = true;

// let endSemester = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (goodGrades) {
//             resolve("I will get a gift");
//         } else {
//             reject("I won't get the gift");
//         }
//     }, 5000);
// });

// console.log(endSemester);    // status - penging
// setTimeout(() => console.log(endSemester), 6000);  // status - resolved

// ---------------------------------

// let goodGrades = 95;

// let endSemester = new Promise((resolve, reject) => {
//     console.log("test1")
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades => 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
//     console.log("test2")
// })

// endSemester.then(value => console.log("Yeahhh I got a gift"))
// endSemester.finally(() => console.log(`No matter if I get a gift or not,
//                                I want to have good grades`))
// console.log("test3");


// --------------------------------

// const flip = () => {
//     let x = (Math.floor(Math.random() * 2) == 0);
//     if (x) {
//         return "heads";
//     } else {
//         return "tails";
//     }
// }

// const flipACoin = new Promise((resolve, reject) => {
//   const flipResult = flip(); //let's say flip() takes a few seconds
//   if(flipResult) {
//     resolve(flipResult);
//   } else {
//     reject();
//   }
// }).then((flipResult) => {
//   console.log(`The result was ${flipResult}`);
// });

// ------------------------------------

// console.log('1111111111111111111111111');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 2000);
// }).then((result) => {
//   console.log("Done!1");
// }).then((result) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Done!2");
//       resolve();
//     }, 3000);
//   });
// }).then((result) => {
//   console.log("Done!3");
// });
// console.log('2222222222222222222222222');

// ----------------------------

const doThisLater = () => {
    return new Promise((resolve, reject) => {
      console.log("Done!");
      resolve();
    });
  };
  
  console.log("After promise-creating function");
  
  doThisLater();
  

// ----------------------------------------
const users = [
    { username: "aaa", email: "aaa@gmail.com" },
    { username: "bbb", email: "bbb@gmail.com" },
    { username: "ccc", email: "ccc@gmail.com" },
  ];


  /** 1. getDataFromServer function return a Promise with users data as Array of objects from server as json
   * Simulate successful completion after 2 seconds
   * 2. Call this function and log the data as an Array datatype 
   * 3. Simulate an error
   * 4. return to step 2, and create render function that will display the users on the html page
  */

