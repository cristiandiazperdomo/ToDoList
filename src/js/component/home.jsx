import React, { useState, useRef } from "react";

import "./Home.css";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	const [taskCounter, setTaksCounter] = useState(0);
	const [inputValue, setInputValue] = useState("");

	const input = useRef();

	const handleNewTodo = (e) => {
		e.preventDefault();

		const newTask = {
			id: todos.length,
			task: inputValue,
		}
		// ADD
		setTodos([...todos, newTask]);
		setTaksCounter(taskCounter + 1);
		// CLEAN
		setInputValue(""); 
		cleanInput();
	}

	const cleanInput = () => input.current.value = "";

	const deleteTask = (id) => {
		const setTodosList = todos.filter(todo => todo.id !== id)
		setTodos(setTodosList);
		setTaksCounter(taskCounter - 1);
	}

	return (
		<div className="bg-info h-100 d-flex flex-column pt-5 align-items-center">
			<p className="text-white fw-light fs-1">todos</p>
			<div className="w-50 d-flex flex-column">
				<form onSubmit={handleNewTodo} className="w-100" >
					<input ref={input} className="w-100 form-control rounded-0" type="text" name="todo" id="input" onChange={(e) => setInputValue(e.target.value)}/>
					<input type="submit" className="d-none" value=""/>
				</form>
				<ul className="list-group w-100">
					{todos.length > 0 && todos.map( (todo, index) => 
						<li 
							className="list-group-item lista d-flex justify-content-between border-left-0 border-right-0 rounded-0" 
							key={index} 
						>
							<p id="lista" className="w-100 h-100">
								{todo.task}
							</p>
							<span type="button" id="trash" className="" onClick={() => deleteTask(todo.id)}>
								X
							</span>
						</li>
					)}
				</ul>
				{ taskCounter > 0 
					&& 	<ul className="list-group w-100 border-top-0 rounded-0">
							<li className="list-group-item border-top-0 rounded-0">{taskCounter} items left</li>
						</ul>}
			</div>
		</div>
	);
};

export default Home;
