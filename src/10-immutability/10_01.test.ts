import {
    addNewBooksToUser,
    moveUser, removeBook, skillsGrow,
    updateBook,
    upgradeUserLaptop,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";

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
