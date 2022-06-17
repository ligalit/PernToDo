import {Dispatch, SetStateAction} from "react";

export interface IToDoForm {
    toDo: IToDo,
    setToDo: Dispatch<SetStateAction<IToDo>>,
    handleAddToDo: () => void,
    handleDeleteComplete: () => void,
    select: JSX.Element,
}

export interface IToDo {
    id: number,
    body: string,
    completed: boolean
}