//Rest Parameters

// const calculateAverage = (thing, ...numbers) => {
//     let sum = 0
//     numbers.forEach((number) => {
//         sum = sum + number
//     })
//     const average = sum / numbers.length
//     return `The average ${thing} ${average}`
// }

// console.log(calculateAverage('grade', 0, 100, 88, 63))

// const printTeam = (team, coach, ...players) => {
//     return `Team: ${team}
//             Coach Name: ${coach}
//             Players: ${players.join(', ')} `
// }
// console.log(printTeam('Liberty', 'Casy Penn', 'John', 'Luke', 'Ella', 'Yomu', 'Xin'))



// -------------------------------sperad operator
// const printTeam = (team, coach, ...players) => {
//     console.log(`Team: ${team}`)
//     console.log(`Coach name: ${coach}`)
//     console.log(`Players: ${players.join(', ')}`)

// }

// const team = {
//     name: 'Lover',
//     coach: 'Mike Jodr',
//     players: ['Lumbaton', 'Lola', 'Cat', 'dogman']
// }
// console.log(printTeam(team.name, team.coach, ...team.players))

// cities = ['seoul', 'Barcel', 'Cape Town', 'London', 'Sichuan']
// const newCity = [...cities, 'Tokyo']
// cities = [...cities, 'Tokyo', 'Cocoa city']
// cities.push('WonderLand')
// console.log(cities)
// console.log(newCity)


// // -----Object speard------
// const house = {
//     bedroom: 2,
//     bathroom: 1.5,
//     yearBuild: 2020
// }

// let newHouse= {
//     ...house,
//     plents: 10,
//     bedroom: 5
// }
// console.log(house)
// console.log(newHouse)

// let person = {
//     name: 'Lome',
//     age: '34',
//     job: 'CTO'
// }
// let location = {
//     city: 'Toronto',
//     country: 'Canada'
// }
// let overView = {
//     ...person,
//     ...location
// }
// console.log(overView)

// -------destructirng



const todo = {
    id: 'asdfe-fawgn3214-dafds',
    text: 'Pay the bill!',
    completed: false,
    etc: 'nothing'
}

const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

const { id, text, completed:todoCompleted, details = 'N/A', ...others } = todo
console.log(id, text, todoCompleted)
console.log(details)
console.log(others)

