let y = 5
let x = 5
for (let index = 0; index < 5; index++) {
    x = x - 1
    led.plot(x, y - 1)
    basic.pause(200)
}
y = 4
x = -1
for (let index = 0; index < 5; index++) {
    x = x + 1
    led.plot(x, y - 1)
    basic.pause(200)
}
y = 3
x = 5
for (let index = 0; index < 5; index++) {
    x = x - 1
    led.plot(x, y - 1)
    basic.pause(200)
}
y = 2
x = -1
for (let index = 0; index < 5; index++) {
    x = x + 1
    led.plot(x, y - 1)
    basic.pause(200)
}
y = 1
x = 5
for (let index = 0; index < 5; index++) {
    x = x - 1
    led.plot(x, y - 1)
    basic.pause(200)
}
