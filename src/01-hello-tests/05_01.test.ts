import {
    createGreetingMessages,
    createMessages,
    getStreetsTitlesOfGoverementBuildings,
    getStreetTitlesOFHouses,
    ManType
} from "./05_01";

let people: Array<ManType> = [  // Let потому что бифорИч будет изменять массив,
// а нельзя менять массив заданный через конст
    {name: "Alexey Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}

]

beforeEach( () => {
    people = [
    {name: "Alexey Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
    ]

})

test("should get array of greeting messagess", () => {
    const helloMessage = createGreetingMessages(people)


    expect(helloMessage.length).toBe(3)
    expect(helloMessage[0]).toBe("Hello Alexey, welcome to IT-Incubator")
    expect(helloMessage[1]).toBe("Hello Alexander, welcome to IT-Incubator")
    expect(helloMessage[2]).toBe("Hello Dmitry, welcome to IT-Incubator")

})



import {AddressType, CityType, demolishHousesOnTheStreet, getBuildingsWithCorrectStaffCount} from "./04_02";


let city: CityType;

export type GovermentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}


beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street:
                        {
                            title: "White street"
                        }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street:
                        {
                            title: "Happy street"
                        }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street:
                        {
                            title: "Happy street"
                        }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 101,
                    street:
                        {
                            title: "Central Str"
                        }

                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 101,
                    street:
                        {
                            title: "South Str"
                        }

                }
            }
        ],
        citizensNumber: 1000000
    }
})


test("list of streets title of goverment buildings", () => {
    let streetsNames = getStreetsTitlesOfGoverementBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe("Central Str")
    expect(streetsNames[1]).toBe("South Str")

})

test("list of street titles", () => {
    let streets = getStreetTitlesOFHouses(city.houses);

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")
})

test("create greeting messages for strets", () => {
    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from Happy street")


})

   