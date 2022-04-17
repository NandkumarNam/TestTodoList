import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const TodoFooter = (props) => {
    const {count} = props;

    const findPathName = () => {
       console.log(window.location);
    }

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{count}</strong> item left</span>
            <Router>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/" onClick={findPathName}>All</a>
                    </li>
                    <li>
                        <a href="#/active" onClick={findPathName}>Active</a>
                    </li>
                    <li>
                        <a href="#/completed" onClick={findPathName}>Completed</a>
                    </li>
                </ul>
            </Router>
            
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default TodoFooter;