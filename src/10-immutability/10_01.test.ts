import {
    addCompanyName,
    addNewBooksToUser,
    moveUser, removeBook, skillsGrow,
    updateBook, updateCompanyName, updateCompanyName2,
    upgradeUserLaptop,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkillsType, WithCompaniesType
} from "./10_01";
import exp from "constants";

test("Laptop should be macbook", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }
    const userWithBetterLaptop = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userWithBetterLaptop)
    expect(user.laptop.title).not.toBe(userWithBetterLaptop.laptop.title)
    expect(userWithBetterLaptop.laptop.title).toBe("Macbook")
    expect(userWithBetterLaptop.laptop).not.toBe(user.laptop)
    expect(user.adress).toBe(userWithBetterLaptop.adress)
})

test("moveUser", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = moveUser(user, 99)

    expect(user).not.toBe(userCopy)

    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.adress.house).toBe(99)
    expect(user.books).toBe(userCopy.books)
})

test("add new books to userr", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.adress).toBe(user.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(user.books.length).toBe(4)
})

test("update js to ts books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.adress).toBe(user.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
    expect(user.books.length).toBe(4)
})


test("update skills user", () => {
    let user: UserWithLaptopType & UserWithSkillsType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react'],
        skills: [10, 15, 60, 52]
    }
    const userCopy = skillsGrow(user, 10, 15)

    expect(user).not.toBe(userCopy)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.adress).toBe(user.adress)
    expect(userCopy.skills[0]).toBe(25)
    expect(user.books.length).toBe(4)
})

test("remove js from books", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }


    const userCopy = removeBook(user, "js")

    expect(user).not.toBe(userCopy)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.adress).toBe(user.adress)
    expect(userCopy.books[2]).toBe("react")
    expect(user.books.length).toBe(4)
    expect(userCopy.books.length).toBe(3)
})


test("add company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [
            {
                id: 1,
                title: "Epam"
            },
            {
                id: 2,
                title: "IT-INCUBATOR"
            },
        ]
    }

    const userCopy = addCompanyName(user, 3, "Google")

    expect(user).not.toBe(userCopy)
    expect(userCopy["companies"][2]).toEqual({id: 3, title:"Google"})
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.adress).toBe(user.adress)
    expect(user.companies).not.toBe(userCopy["companies"])

})

test("update company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [
            {
                id: 1,
                title: "Епам"
            },
            {
                id: 2,
                title: "IT-INCUBATOR"
            },
        ]
    }

    const userCopy = updateCompanyName(user, 1, "EPAM")

    expect(user).not.toBe(userCopy)
    expect(userCopy["companies"][0]).toEqual({id: 1, title:"EPAM"})
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.adress).toBe(user.adress)
    expect(user.companies).not.toBe(userCopy["companies"])

})


test("update company2", () => {

     let companies = {
         "Dimych": [{id: 1, title: "Епам"}, {id: 2, title: "IT-INCUBATOR"}],
         "Denis": [{id: 1, title: "IT-INCUBATOR"}]
     }


const companiesCopy = updateCompanyName2(companies, "Dimych", 1, "EPAM")

    expect(companies).not.toBe(companiesCopy)
    expect(companies["Dimych"]).not.toBe(companiesCopy["Dimych"])
    expect(companies["Denis"]).toBe(companiesCopy["Denis"])
    expect(companiesCopy["Dimych"][0].title).toBe("EPAM")


})