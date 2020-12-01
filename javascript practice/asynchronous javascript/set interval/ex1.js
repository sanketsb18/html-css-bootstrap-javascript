// function displayTime() {
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     document.getElementById('demo').textContent = time;
// }

// const createClock = setInterval(displayTime, 1000);

let completed = true;

let learnJS = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed learning JS.");
        } else {
            reject("I haven't completed learning JS yet.");
        }
    }, 3 * 1000);
});