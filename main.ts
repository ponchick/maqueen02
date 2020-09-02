radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 31)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 31)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    } else if (receivedNumber == 6) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else if (receivedNumber == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 31)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 8) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 9) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 31)
    } else if (receivedNumber == 18) {
        ИзмУгла = -5
    } else if (receivedNumber == 12) {
        ИзмУгла = 5
    } else if (receivedNumber == 10) {
        ИзмУгла = 0
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
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
