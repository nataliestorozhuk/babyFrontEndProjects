const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')


function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const tiemInterval = 6

    secondsHand.style.transform = 'rotate(' + (seconds * tiemInterval) +
     'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * tiemInterval + seconds/10) +
     'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes/2) +
     'deg)'
}

/*The setInterval() method, offered on the Window and Worker interfaces,
 repeatedly calls a function or executes a code snippet, with 
 a fixed time delay between each call. */
setInterval(getTime, 100)