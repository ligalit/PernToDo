import React from 'react';
import {IToDo} from "../interfaces/IToDo";
import ToDoItem from "./ToDoItem";

const ToDoList = ({toDos, handleCompleteToDo}: { toDos: IToDo[], handleCompleteToDo: (id: number) => void }) => {
    return (
        <div data-testid="testToDoList">
            {toDos.length > 0 ? toDos.map((t, i) => <ToDoItem key={i} toDo={t}
                                                              handleCompleteToDo={handleCompleteToDo}/>) :
                <h2>Todos not found</h2>}
        </div>
    );
};

export default ToDoList;