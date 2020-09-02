radio.onReceivedNumber(function (receivedNumber) {
    Команда = receivedNumber
    if (Команда == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (Команда == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    } else if (Команда == 3) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    } else if (Команда == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else if (Команда == 5) {
        ИзмУгла = -5
    } else if (Команда == 6) {
        ИзмУгла = 5
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        ИзмУгла = 0
    }
})
let Команда = 0
let ИзмУгла = 0
radio.setGroup(1)
ИзмУгла = 0
let Угол = 30
maqueen.servoRun(maqueen.Servos.S1, Угол)
basic.forever(function () {
    if (ИзмУгла > 0 && Угол < 130) {
        Угол += ИзмУгла
        maqueen.servoRun(maqueen.Servos.S1, Угол)
        basic.pause(10)
    }
    if (ИзмУгла < 0 && Угол > 30) {
        Угол += ИзмУгла
        maqueen.servoRun(maqueen.Servos.S1, Угол)
        basic.pause(10)
    }
})
