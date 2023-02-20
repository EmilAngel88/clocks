const clock = {
    h: null,
    m: null,
    s: null,
}

const clockDOM = {
    h: document.getElementById('hours').style,
    m: document.getElementById('minutes').style,
    s: document.getElementById('seconds').style,
}

function init(){
    handleCurrentTime();
    setInterval(handleCurrentTime, 1000);
}

function handleCurrentTime() {
    const currentTime = new Date()

    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()

    updateState(hours, minutes, seconds)
}

function updateState(hours, minutes, seconds) {
    const intermediateHourAngle = Math.floor(minutes / 12) * 6

    const timeAngle = {
        h: hours < 12 ? (hours * 30 + intermediateHourAngle) : ((hours - 12) * 30 + intermediateHourAngle),
        m: minutes * 6,
        s: seconds * 6,
    }

    this.clock = timeAngle

    onUpdate()
}

function onUpdate() {
    clockDOM.h.transform = `rotate(${this.clock.h}deg)`
    clockDOM.m.transform = `rotate(${this.clock.m}deg)`
    clockDOM.s.transform = `rotate(${this.clock.s}deg)`

    console.log(this.clock)
}

init()
