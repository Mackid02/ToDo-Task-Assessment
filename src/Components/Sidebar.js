import React from "react";

const Sidebar = ({ position, deletedTasks }) => {
    return (
        <aside className={`sidebar ${position}`}>
            {position === "left" ? <p>Sidebar</p> : <DeletedTasksList deletedTasks={deletedTasks} />}
        </aside>
    );
};

const DeletedTasksList = ({ deletedTasks }) => (
    <div>
        <h2>Deleted Items</h2>
        <ul>
            {deletedTasks.map((task, index) => (
                <li key={index} className="muted">{task}</li>
            ))}
        </ul>
    </div>
);

export default Sidebar;
