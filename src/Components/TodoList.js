import React, { useState } from "react";
import checklistIcon from "./Checklist-PNG-File.png"; 

const TodoList = ({ setDeletedTasks }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

    const toggleComplete = (index) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            );
            return updatedTasks.sort((a, b) => a.completed - b.completed);
        });
    };

    const deleteTask = (index) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            const removedTask = updatedTasks.splice(index, 1)[0];
    
            // Ensure deleted tasks are added only once
            setDeletedTasks((prev) => (prev.includes(removedTask.text) ? prev : [...prev, removedTask.text]));
    
            return updatedTasks;
        });
    };
    const moveTask = (index, direction) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            const newIndex = index + direction;
            if (newIndex < 0 || newIndex >= updatedTasks.length) return prevTasks;
            [updatedTasks[index], updatedTasks[newIndex]] = [updatedTasks[newIndex], updatedTasks[index]];
            return updatedTasks;
        });
    };

    return (
        <div id="todo-app">
            
            <div className="add-box">
                <img src={checklistIcon} alt="Checklist Icon" className="header-icon" />
                <h2 className="todo-header">Add Task Here</h2>
            </div>

            <div className="input-box">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button id="add-button" onClick={addTask}>Add</button>
            </div>

            
            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className={`task ${task.completed ? "completed" : ""}`}>
                        <span className="task-number">{index + 1}. </span> {/* Display task number */}
                        <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(index)} />
                        <span>{task.text}</span>
                        <button id="del" onClick={() => deleteTask(index)}>Delete</button>
                        <button id="up" onClick={() => moveTask(index, -1)}>🢁</button>
                        <button id="down" onClick={() => moveTask(index, 1)}>🢃</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
