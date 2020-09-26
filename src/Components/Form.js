import React from 'react';

const Form = ( {inputText ,setInputText, todos, setTodos, setStatus} ) => {
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            // ...todo mean if we alrea have something then add it after that.
            ...todos, 
            { 
                text: inputText, 
                completed: false,
                id: Math.round(Math.random() * 1000)
            }]);
        setInputText('');
    };

    const statusHandler = (e) => {

        setStatus(e.target.value)
    }

    return (
        <form>
            <input type="text" className="todo-list" onChange={inputTextHandler}  value={inputText}/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
};

export default Form;
