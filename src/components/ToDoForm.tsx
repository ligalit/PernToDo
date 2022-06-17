import React from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import {IToDoForm} from "../interfaces/IToDo";

const ToDoForm = ({toDo, setToDo, handleAddToDo, handleDeleteComplete, select}: IToDoForm) => {
    return (
        <form data-testid="testToDoForm">
            <Input value={toDo.body}
                   data-testid="input"
                   type="text"
                   onChange={(e) => setToDo(({...toDo, body: e.currentTarget.value.trimStart()}))}
                   placeholder="What needs to be done?"/>
            <div className="section_todos-btns">
                <Button data-testid="add-button" type="button" onClick={handleAddToDo}
                        disabled={toDo.body.length === 0}>Add todos</Button>
                <Button data-testid="clear-button" type="button"
                        style={{color: "rgba(175,0,0,0.5)", border: "1px solid rgba(175,0,0,0.5)"}}
                        onClick={handleDeleteComplete}>Clear Completed</Button>
                {select}
            </div>
        </form>
    );
};

export default ToDoForm;