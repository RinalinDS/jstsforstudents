export type UserType = {
    name: string
    hair: number
    adress: { city: string, house?: number }
    skills? : Array<number>
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}


export function moveUser(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...user, adress: {...user.adress, house}

    }
}

export function upgradeUserLaptop(user: UserWithLaptopType, value: string) {
    return {
        ...user, laptop: {...user.laptop, title: value}
    }
}

export function addNewBooksToUser(user: UserWithLaptopType & UserWithBooksType, newBook: string) {

    return {
        ...user, books: [...user.books, newBook]
    }
}


export function updateBook(user: UserWithLaptopType & UserWithBooksType, old: string, update: string) {
    return {
        ...user, books: user.books.map(m => m === old ? update : m)//p po4emu ne m=update    }
    }
}

export function skillsGrow(user: UserWithLaptopType & UserWithBooksType, old: number, updated: number) {
    return {...user, skills: user.skills.map(m => m === old? m+updated: m)}

}

export function removeBook(user: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
    ...user, books: user.books.filter(f => f !== book)
    }

}