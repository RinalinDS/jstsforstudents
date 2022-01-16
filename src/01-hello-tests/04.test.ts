import {CourseType} from "./04";

test ("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    /*const predicate = (age: number) => {
        return age > 90;

    }

    const oldAges = ages.filter(predicate);*/


    const oldAges = ages.filter(age => age > 90);


    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)


})

test ("should take cheap courses, cheaper than 160", () => {
    const courses = [
        {title: "css", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
        ]

    /*const cheapPredicate = (course: CourseType) => {
        return course.price < 160;
    }*/
    // VNIZU KOROCHE BEZ ISPOLZOVANIYA OTDELNOI FUKNCCI


    const cheapCourses = courses.filter(course => course.price < 160);
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("css")
    expect(cheapCourses[1].title).toBe("REACT")
})


test("get only completed tasks", () => {
    const tasks =[
        {id:1, title:"Bread", isDone:false},
        {id:2, title:"Milk", isDone:true},
        {id:3, title:"Salt", isDone:false},
        {id:4, title:"Sugar", isDone:true}
    ]



const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})



test("get only uncompleted tasks", () => {
    const tasks =[
        {id:1, title:"Bread", isDone:false},
        {id:2, title:"Milk", isDone:true},
        {id:3, title:"Salt", isDone:false},
        {id:4, title:"Sugar", isDone:true}
    ]



    const unccompletedTasks = tasks.filter(t => !t.isDone)

    expect(unccompletedTasks.length).toBe(2)
    expect(unccompletedTasks[0].id).toBe(1)
    expect(unccompletedTasks[1].id).toBe(3)

})