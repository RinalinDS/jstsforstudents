import {GovermentBuildingsType} from "./05_01.test";
import {HousesType} from "./04_02";

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Alexey Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}

]

/*const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]

    }

}*/

const dimychTransformator = (man: ManType) => ({   // скобки тут для того,
// чтобы возращаемый объект {} не был телом ф-ции
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]

})



const devs = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    },

]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const devs2 = [d1, d2, d3]

const devs3 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]


const devs4 = people.map(dimychTransformator)

const devs5 = people.map(man => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]

}))

const helloMessage = people.map(p => `Hello ${p.name.split(" ")[0]}, welcome to IT-Incubator`)

export const createGreetingMessages = (people: Array<ManType>) => {

    return people.map(p => `Hello ${p.name.split(" ")[0]}, welcome to IT-Incubator`)

}

export const getStreetsTitlesOfGoverementBuildings =
    (buildings: Array<GovermentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetTitlesOFHouses = (houses: Array<HousesType>) =>{
    return houses.map(h => h.address.street.title)

}

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)

}