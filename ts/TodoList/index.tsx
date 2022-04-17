import React, { useEffect, useState } from "react";

const TodoList = (props) => {
	const {todoItems, removeTodoItem, markTodoDone, onEdit, onBlur, editText, toggleAll} = props;
	const [fieldValue, setFieldValue] = useState("");

	useEffect(() => {
        setFieldValue(editText);
    }, [editText]);
	
	const handleEdit = (e, idx) => {
		onEdit(idx);
	}

	const handleSubmit = (e, idx) => {
		onBlur(idx, fieldValue);
	}

	const renderTodoList = () => {
		return (
			todoItems.map((item, idx) => {
				return (
					<li className={item.styleClass} key={item.index}>
						<div className="view">
							<input className="toggle" onClick={() => markTodoDone(idx)} type="checkbox" checked={item.done ? true : false} />
							<label onDoubleClick={ e => handleEdit(e, item.index) }>{item.value}</label>
							<button className="destroy" onClick={() => removeTodoItem(idx)}>delete</button>
						</div>
						<input className="edit" value={fieldValue} onChange={e => setFieldValue(e.target.value)} onBlur={(e) => handleSubmit(e, item.index)} />
					</li>
				)
			})
		)
	}
    return (
        <section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox"/>
				<label onClick={() => toggleAll()}>Mark all as complete</label>
				<ul className="todo-list">
					{renderTodoList()}
				</ul>
			</section>
    )

}

export default TodoList;