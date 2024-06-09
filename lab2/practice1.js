let Promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved")
    },6000)})

let Promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise2 resolved")
    },3000)})

    Promise1.then((successMessage) => {
        console.log("Promise 1: " + successMessage);
        Promise2.then((successMessage) => {
           console.log("Promise 2: " + successMessage);
        })
    })