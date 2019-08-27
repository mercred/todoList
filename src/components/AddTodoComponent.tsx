 import React from 'react'
 import "../CSS/NewTodo.css"

export default class AddTodoComponent extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="New Todo Text" />
                <button className="btn">Create new</button>
        </form>
    );
    }
}