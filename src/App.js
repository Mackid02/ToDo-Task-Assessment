import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import TodoList from "./Components/TodoList";
import "./styles.css";

function App() {
    const [deletedTasks, setDeletedTasks] = useState([]);

    return (
        <div className="app">
            <Header />
            <div className="container">
                <Sidebar position="left" />
                <main>
                    <TodoList setDeletedTasks={setDeletedTasks} />
                </main>
                {deletedTasks.length > 0 && <Sidebar position="right" deletedTasks={deletedTasks} />}
            </div>
            <Footer />
        </div>
    );
}

export default App;
