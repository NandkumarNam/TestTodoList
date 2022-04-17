import React, { useState } from "react";

const TodoFooter = (props) => {
    const {count, sortTodoList, clearCompletedTodo} = props;
    const [filterType, setFilterType] = useState('all');

    const findPathName = (val) => {
        sortTodoList(val);
        setFilterType(val);
    }

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{count}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className={filterType === "all" ? "selected" : ""} href="#/" onClick={() => findPathName("all")}>All</a>
                    </li>
                    <li>
                        <a className={filterType === "active" ? "selected" : ""} href="#/active" onClick={() => findPathName("active")}>Active</a>
                    </li>
                    <li>
                        <a className={filterType === "completed" ? "selected" : ""} href="#/completed" onClick={() => findPathName("completed")}>Completed</a>
                    </li>
                </ul>
            
            <button className="clear-completed" onClick={clearCompletedTodo}>Clear completed</button>
        </footer>
    )
}

export default TodoFooter;