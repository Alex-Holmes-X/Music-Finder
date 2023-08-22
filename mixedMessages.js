// Randomly Generate a custom car for a customer


const decade = ['60s','70s','80s','90s','00s','10s']

const genre = ['rock','pop','blues','alternative','soul','easy listening']

const mood = ['happy','sad','fast','slow','chill','spiritual','off beat']

// console.log(decade)


const musicFinder = () => {
    let randomYear = decade[Math.floor(Math.random() * decade.length)];
    console.log(randomYear)
    let randomGenre = genre[Math.floor(Math.random() * genre.length)];
    console.log(randomGenre)
    let randomMood = mood[Math.floor(Math.random() * mood.length)];
    console.log(randomMood)
    console.log("Im a Music Finder, i will find something for you to listen to!!")
} 

musicFinder()