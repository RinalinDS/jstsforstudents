const someuser = {
    name: "Denis",
    age: 30,
    address: {
        city: {
            title: "Minsk"
        }
    }
}

console.log(someuser.address.city.title)
console.log(someuser["address"].city["title"])


type usersType = {
    [key: string]: { id: number, name: string }
}

export const users: usersType = {
    '101': {id: 101, name: "Denis"},
    '32323': {id: 32323, name: "Dima"},
    '1212': {id: 1212, name: "Diogen"},
    '1': {id: 1, name: "Demandred"},
}

// users[1]
let user = {id: 100100, name: "Damacon"}
users[user.id] = user; // dobavit svoistvo
delete users['101']


export const usersArray = [
    {id: 101, name: "Denis"},
    {id: 32323, name: "Dima"},
    {id: 1212, name: "Diogen"},
    {id: 1, name: "Demandred"},
]


usersArray.find(f => f.id === 1)
let usersCopy = [...usersArray, user] // dobavit element v massiv
