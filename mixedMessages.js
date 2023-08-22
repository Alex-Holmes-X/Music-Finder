// Randomly Generate a custom car for a customer


const decade = ['60s','70s','80s','90s','00s','10s']

const genre = ['Rock','Pop','Blues','Alternative','Soul','Easy Listening']

const mood = ['Happy','Sad','Fast','Slow','Chill','Spiritual','Off Beat']

// console.log(decade)


const musicFinder = () => {
    let randomYear = decade[Math.floor(Math.random() * decade.length)];
    // console.log(randomYear)
    let randomGenre = genre[Math.floor(Math.random() * genre.length)];
    // console.log(randomGenre)
    let randomMood = mood[Math.floor(Math.random() * mood.length)];
    // console.log(randomMood)
    console.log("Im a Music Finder, i will find something for you to listen to!!")
    console.log(`I think you should listen to ${randomMood}, ${randomGenre} music from the ${randomYear}`)
} 

musicFinder()