
type UserType = { name: string, age: number, address:{title: string} }


function increaseAge(u: UserType) {
    u.age++
}

test('big test', () => {
    const user = {
        name: "Denis",
        age: 30,
        address: {
            title: "SPb"
        }
    }
    increaseAge(user)
    expect(user.age).toBe(31)
})


test('big test2', () => {
    const user = {
        name: "Denis",
        age: 30,
        address: {
            title: "SPb"
        }
    }
    increaseAge(user)
    const superman = user;
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {
    const users = [
        {
            name: "Denis",
            age: 30,
        },
        {
            name: "Misha",
            age: 20,
        }
    ]

    const admins = users
    admins.push({name: "Valera", age: 12})

    expect(users[2]).toEqual({name: "Valera", age: 12})


})

test('value type test', () => {
    const usersCount = 101;
    let adminsCount = usersCount

    adminsCount = adminsCount + 10;



    expect(adminsCount).toBe(110)
    expect(usersCount).toBe(100)


})

test('reference type test', () => {
    const user: UserType = {
        name: "Denis",
        age: 30,
        address: {
            title: "Kiev"
        },
    };
   // let addr = user.address;
   const user2: UserType = {
       name: "Masha",
       age: 28,
       address: user.address
   }

   user2.address.title = "Moscow"
    expect(user.address.title).toBe("Moscow")
    expect (user.address).toBe(user2.address)

})

test('reference type array test', () => {
    const address = {
        title: "Moscow"
    }

    const user: UserType = {
        name: "Denis",
        age: 30,
        address: address
    }
    // let addr = user.address;
    const user2: UserType = {
        name: "Masha",
        age: 28,
        address: address
    }

    const users = [user, user2, {name:" Pavlik", age: 5, address}]

    const admins = [user, user2]

    admins[0].name = "Dionisiy"

    user2.address.title = "Moscow"
    expect(user.address.title).toBe("Moscow")
    expect (user.address).toBe(user2.address)
    expect (user.name).toBe("Dionisiy")
    expect (users[0].name).toBe("Dionisiy")

})


test('sort array test', () => {
    const letters = ['a', 'b' , 'z' , 'p' , 'e']
    paspartu(letters)
    expect(letters).toEqual(['a', 'b' , 'z' , 'p' , 'e'])

})

function paspartu(l: any) {
    const copy = [...l].sort()
    console.log(copy)
}