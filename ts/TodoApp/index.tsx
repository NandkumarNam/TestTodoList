import React, { useEffect, useState } from "react";
import TodoHeader from "../TodoHeader";
import TodoList from "../TodoList";
import TodoFooter from "../TodoFooter";
import {filterArray, resetTodoListStatus} from '../utils/utils';
import "./todoStyle.css"

const completeTodoList = [
    { index: 1, value: "learn react", done: false, styleClass:"" },
    { index: 2, value: "Go shopping", done: true, styleClass:"completed" }
]
const TodoApp = () => {
    const [todoList, setTodoList] = useState(completeTodoList);
    const [backUpTodoList, setBackUpTodoList] = useState(completeTodoList);
    const [editText, setEditText] = useState("");
    const [activeItemCount, setActiveItemCount] = useState(0);
    const [filterStatus, setFilterStatus] = useState(false);

    useEffect(() => {
        countActiveTodoItem();
    }, [todoList]);

    const countActiveTodoItem = () => {
        const count = filterArray(backUpTodoList, false).length;
        setActiveItemCount(count);
    }

    const addItem = (todoItem) => {
        let tempObj = {
            index: todoList.length + 1,
            value: todoItem,
            done: false,
            styleClass: ""
        };
        setTodoList([...todoList, tempObj])
        setBackUpTodoList([...todoList, tempObj]);
    }

    const markTodoDone = (itemIdx) => {
        const updateList = [...todoList];
        updateList[itemIdx].done = !updateList[itemIdx].done;
        updateList[itemIdx].styleClass = "completed";

        setTodoList(updateList);
        setBackUpTodoList(updateList);
    }

    const removeTodoItem = (itemIdx) => {
        const updateList = [...todoList];
        updateList.splice(itemIdx, 1);
        setTodoList(updateList);
        setBackUpTodoList(updateList);
    }

    const filterTodoList = (filterType) => {
        let updateList = [...backUpTodoList];

        switch(filterType){
            case "all":
                break;
            case "active":
                updateList = filterArray(updateList, false);
                break;
            case "completed":
                updateList = filterArray(updateList, true);
                break;
        }

        setTodoList(updateList);
    }

    const clearCompletedTodo = () => {
        let updateList = [...backUpTodoList];
        updateList = filterArray(updateList, false);
        setTodoList(updateList);
        setBackUpTodoList(updateList);
    }

    const onEdit = (idx) => {
        let updateList = [...backUpTodoList];
        updateList = updateList.map((item) => {
            if(item.index === idx){
                item.styleClass = item.done ? "completed editing" : "editing";
                setEditText(item.value);
            }
            return item;
        })

        setTodoList(updateList);
        setBackUpTodoList(updateList);
    }

    const onBlur = (idx, newVal) => {
        let updateList = [...backUpTodoList];
        updateList = updateList.map((item) => {
            if(item.index === idx){
                item.styleClass = item.done ? "completed" : "";
                item.value = newVal;
            }
            return item;
        })

        setTodoList(updateList);
        setBackUpTodoList(updateList);
    }

    const toggleAll = () => {
        let updateList = [...backUpTodoList];
        setFilterStatus(!filterStatus);
        updateList = resetTodoListStatus(updateList, filterStatus);
        setTodoList(updateList);
        setBackUpTodoList(updateList);
    }

    return (
        <div className="todo-app">
            <TodoHeader addItem={addItem} />
            <TodoList
                markTodoDone={markTodoDone}
                todoItems={todoList}
                removeTodoItem={removeTodoItem}
                onEdit={onEdit}
                onBlur={onBlur}
                editText={editText}
                toggleAll={toggleAll}/>
            <TodoFooter 
                count={activeItemCount}
                sortTodoList={filterTodoList}
                clearCompletedTodo={clearCompletedTodo}/>
        </div>
    )
}

export default TodoApp;