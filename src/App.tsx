import React, {useMemo, useState} from 'react';
import './App.css';
import ToDoForm from "./components/ToDoForm";
import {IToDo} from "./interfaces/IToDo";
import ToDoList from "./components/ToDoList";
import Select from "./components/UI/Select";

function App() {
    const [toDo, setToDo] = useState<IToDo>({id: Date.now(), body: "", completed: false})
    const [toDos, setToDos] = useState<IToDo[]>([{id: 1, body: 'Clean Room', completed: false}]);
    const [filter, setFilter] = useState("all");

    const memoToDos = useMemo(() => {
        switch (filter) {
            case "active":
                return toDos.filter((t) => !t.completed);
            case "completed":
                return toDos.filter((t) => t.completed);
            default:
                return toDos;
        }
    }, [toDos, filter]);

    const handleAddToDo = () => {
        setToDos(prevState => [...prevState, toDo]);
        setToDo({id: Date.now(), body: "", completed: false});
    }

    const handleCompleteToDo = (id: number) => {
        setToDos(prevState => prevState.map((p) => p.id === id ? {...p, completed: !p.completed} : p));
    }

    const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.currentTarget.value);
    }

    const handleDeleteComplete = () => {
        setToDos(prevState => prevState.filter(p => !p.completed));
    };

    const select = (<Select data-testid="testSelect" onChange={handleChangeFilter}/>)

    return (
        <div className="section__app">
            <div className="container">
                <div className="section__todos">
                    <h1 data-testid="h1-todos" style={{textAlign: "center"}}>ToDos</h1>
                    <ToDoForm toDo={toDo} setToDo={setToDo} handleAddToDo={handleAddToDo}
                              handleDeleteComplete={handleDeleteComplete} select={select}/>
                    <ToDoList toDos={memoToDos} handleCompleteToDo={handleCompleteToDo}/>
                </div>
            </div>
        </div>
    );
}

export default App;
