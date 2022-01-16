type usersType = {
    [key: string]: { id: number, name: string }
}

let users: usersType;

beforeEach(() => {
        users = {
            '101': {id: 101, name: "Denis"},
            '32323': {id: 32323, name: "Dima"},
            '1212': {id: 1212, name: "Diogen"},
            '1': {id: 1, name: "Demandred"},
        }
    }
)

test("should update corresponding user", () => {
    users['1'].name = "Ishamael"
    expect(users['1'].name).toBe("Ishamael")
    expect(users[1]).toEqual({id: 1, name: "Ishamael"})
    }

)

test("should delete user", () => {
    delete users['1']
    expect(users['1']).toBeUndefined()
})
