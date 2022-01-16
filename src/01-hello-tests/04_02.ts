export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street : StreetType
}

export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovermentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}



export type CityType = {

    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithCorrectStaffCount(buildings: Array<GovermentBuildingsType>, number: number) {
    return buildings.filter(b => b.staffCount > number)

}