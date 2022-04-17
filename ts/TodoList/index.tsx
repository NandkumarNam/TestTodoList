import React from "react";

const TodoList = (props) => {
	const {todoItems, removeTodoItem, markTodoDone} = props;

	const renderTodoList = () => {
		return (
			todoItems.map((item, idx) => {
				return (
					<li className={item.done ? "completed" : ""} key={item.index}>
						<div className="view">
							<input className="toggle" onClick={() => markTodoDone(idx)} type="checkbox" checked={item.done ? true : false} />
							<label>{item.value}</label>
							<button className="destroy" onClick={() => removeTodoItem(idx)}>delete</button>
						</div>
						<input className="edit" value={item.value} />
					</li>
				)
			})
		)
	}
    return (
        <section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox"/>
				<label>Mark all as complete</label>
				<ul className="todo-list">
					{renderTodoList()}
					{/* <li className="completed">
						<div className="view">
							<input className="toggle" type="checkbox" checked />
							<label>Taste JavaScript</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Create a TodoMVC template" />
					</li>
					<li>
						<div className="view">
							<input className="toggle" type="checkbox" />
							<label>Buy a unicorn</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Rule the web" />
					</li> */}
				</ul>
			</section>
    )

}

export default TodoList;