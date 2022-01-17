export type UserType = {
    name: string
    hair: number
    adress: { city: string, house?: number }

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
export type UserWithSkillsType = UserType & UserWithBooksType & {
    skills: Array<number>
}

export type WithCompaniesType = {
    companies: Array<{ title: string, id: number }>
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

export function skillsGrow(user: UserWithLaptopType & UserWithSkillsType, oldSKillQuantity: number, updatedSKillQuantity: number) {
    return {...user, skills: user.skills.map(m => m === oldSKillQuantity ? m + updatedSKillQuantity : m)}

}

export function removeBook(user: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {
        ...user, books: user.books.filter(f => f !== bookForDelete)
    }
}


export const addCompanyName = (user:UserWithLaptopType & WithCompaniesType , id: number, companyName: string) => {
    return (
    {...user, companies: [...user.companies, {id, title:companyName}]}
    )
}

export const updateCompanyName = (user:UserWithLaptopType & WithCompaniesType, id: number, companyName: string) => {
    return (
        {...user, companies: user.companies.map(m => m.id === id? {...m, title: companyName} : m)}
        )

}

export const updateCompanyName2 = (companies: { [key:string] : Array<{id: number, title: string}>},
                                   userName: string, companyID : number , newTitle: string) => {
    // let companyCopy = {...companies}
    // companyCopy[userName] = companies[userName].map(m => m.id === companyID ? {...m, title: newTitle}: m)
    //
    // return companyCopy
    // длинный вариант вверху, короткий внизу.
    return {...companies, [userName]: companies[userName].map(m => m.id === companyID ? {...m, title: newTitle}: m)}



}