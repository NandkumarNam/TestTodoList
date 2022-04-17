import React, { useEffect, useState } from "react";
import TodoHeader from "../TodoHeader";
import TodoList from "../TodoList";
import TodoFooter from "../TodoFooter";
import "./todoStyle.css"

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        { index: 1, value: "learn react", done: false },
        { index: 2, value: "Go shopping", done: true }
    ]);

    const [activeItemCount, setActiveItemCount] = useState(0);

    useEffect(() => {
        countActiveTodoItem();
    }, [todoList]);

    const countActiveTodoItem = () => {
        const count = todoList.filter((item, idx) => {
            return item.done === false;
        }).length;
        console.log("count", count);
        setActiveItemCount(count);
    }

    const addItem = (todoItem) => {
        let tempObj = {
            index: todoList.length + 1,
            value: todoItem,
            done: false
        };
        setTodoList([...todoList, tempObj])
    }

    const markTodoDone = (itemIdx) => {
        //let todo = todoList[itemIdx];
        //todoList.splice(itemIdx, 1);
        //todo.done = !todo.done;
        //todo.done ? todoList.push(todo) : todoList.unshift(todo);

        const updateList = [...todoList];
        updateList[itemIdx].done = !updateList[itemIdx].done;
        setTodoList(updateList);
    }

    const removeTodoItem = (itemIdx) => {
        const updateList = [...todoList];
        updateList.splice(itemIdx, 1);
        setTodoList(updateList);
    }


    return (
        <div className="todo-app">
            <TodoHeader addItem={addItem} />
            <TodoList
                markTodoDone={markTodoDone}
                todoItems={todoList}
                removeTodoItem={removeTodoItem} />
            <TodoFooter 
                count={activeItemCount}/>
        </div>
    )
}

export default TodoApp;