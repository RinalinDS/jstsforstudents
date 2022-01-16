
import {ManType} from "./Destructuring";


let props:ManType;

beforeEach(() => {
    props = {
        name : "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        adress: {
            street: {
                title: "Rusanovka"
            }
        }
    }
})


test ("", () => {


    // const age = props.age;
    // const lessons = props.lessons  / эти две строки , равносильны строке снизу.
    const {age, lessons} = props; // ili mojno tak ewe {age : myAge, lessons: l} = props , to est svoistvu age budet
    //  sootvetssot peremennaya myAge , a l = props.lesson, no tak ne nado delat , mojno zaputats9
    const title = props.adress.street.title // ili const {title} = props.adress.street


    const a = props.age;
    const l = props.lessons


    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    expect(a).toBe(32)
    expect(l.length).toBe(3)


})

test("", ()=> {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const {age, name} = props

    const {title} = props.adress.street

    const {adress} = props

    const [ls1, ls2] = props.lessons

    const[lsn1, ...restLessons] = props.lessons

    expect(restLessons.length).toBe(2)

    expect(ls2.title).toBe("2")
    expect(adress.street.title).toBe("Rusanovka")
    expect(title).toBe("Rusanovka")

})


