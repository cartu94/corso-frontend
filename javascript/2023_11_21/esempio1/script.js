let hours = new Date().getHours();
let minutes = new Date().getMinutes();

if (hours < 12) {
    console.log(hours + ":" + minutes + " - Good morning");
} else if (hours < 20) {
    console.log(hours + ":" + minutes + " - Good afternoon");
} else {
    console.log(hours + ":" + minutes + " - Good evening");
}