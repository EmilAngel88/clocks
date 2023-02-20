const clock = {
    h: null,
    m: null,
    s: null,
}

function init(){
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
    let h = document.getElementById('hours').style
    let m = document.getElementById('minutes').style
    let s = document.getElementById('seconds').style

    h.transform = `rotate(${this.clock.h}deg)`
    m.transform = `rotate(${this.clock.m}deg)`
    s.transform = `rotate(${this.clock.s}deg)`

    console.log(this.clock)
}

init()
