// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
        this.title = title,
        this.uploader = uploader,
        this.time = time
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
};
let v1 = new Video('Three days on Manhattan', 'John', 60 * 95);
v1.watch()
let v2 = new Video('Passion', 'Paul', 60 * 110);
v2.watch()

let video_data = [
    {title: 'Three days on Manhattan', uploader: 'John', time: 60 * 95},
    {title: 'Passion', uploader: 'Paul', time: 60 * 110},
    {title: 'Strowberry field', uploader: 'Lior', time: 60 * 45},
    {title: 'The Seventh seal', uploader: 'Dana', time: 60 * 87},
    {title: 'The shame', uploader: 'Yossi', time: 60 * 167},  
]

// let video_arr = video_data.map((v) => new Video(v.title, v.uploader, v.time));
let video_arr = video_data.map(({title, uploader, time}) => new Video(title, uploader, time));

video_arr.forEach(video => video.watch());