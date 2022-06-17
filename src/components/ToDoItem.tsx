import React from 'react';
import {IToDo} from "../interfaces/IToDo";
import Button from "./UI/Button";

const ToDoItem = ({toDo, handleCompleteToDo}: { toDo: IToDo, handleCompleteToDo: (id: number) => void }) => {
    return (
        <div data-testid="testToDoItem" className="section__todos-todo">
            <div
                style={{textDecoration: toDo.completed ? "line-through" : ""}}
            >
                {toDo.body}
            </div>
            <div>
                <Button data-testid={`complete-button-${toDo.id}`} onClick={() => handleCompleteToDo(toDo.id)}>
                    Complete
                    To Do
                </Button>
            </div>
        </div>
    );
};

export default ToDoItem;