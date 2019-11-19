let seconds = 0;
let minutes = 0;
let hours = 0;

// secondRotation = () => {
//     seconds/60 * 360
// }

// let secondDegrees = (seconds/60) * 360
// let minuteDegrees = (minutes/60) * 360
// let hourDegrees = (hour/60) * 360

secondHand = document.getElementById('second')
minuteHand = document.getElementById('minute')
hourHand = document.getElementById('hour')

let secondDegrees = (seconds/60) * 360
let minuteDegrees = (minutes/60) * 360
let hourDegrees = (hour/60) * 360



tick = () => {
    seconds++
    console.log('Seconds passed: ' + seconds)
    secondHand.style.transform = "rotate(" + secondDegrees + "deg)"
    
    secondDegrees = (seconds/60) * 360
    minuteDegrees = (minutes/60) * 360
    hourDegrees = (hour/60) * 360

    console.log(secondDegrees)
    if (seconds >= 60) {
        console.log(secondDegrees)
        seconds = 0
        minutes++
        minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)"
        console.log('Minutes passed: ' + minutes)
        if (minutes >= 60) {
            minutes = 0
            hours++
            console.log('Hours passed: ' + hours)
        }
        
    }
    
   
}

tick ()
setInterval(tick, 100)


