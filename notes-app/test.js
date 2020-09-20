
const now = new Date()
const timeStamp = now.getTime()

const past = new Date('July 21 2222 00:00:21')
const pastTimeStamp = past.getTime()

if (timeStamp > pastTimeStamp) {
    console.log(`timeStamp is higher which is ${now.toString()}`)
} else {
    console.log(`pastTimeStamp is higher which is ${past.toString()}`)
}
// console.log(`month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)
