import React from "react";


export type ManType ={
    name : string
    age: number
    lessons: Array<{title:string}>  //  eto type bez imeni kak man type obyavlyaets9 4erez {}
    adress: {
        street: {
            title: string
        }
    }
}


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man,  ...restProps} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}