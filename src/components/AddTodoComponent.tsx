 import React from 'react'
 import "../App.css"

export default class AddTodoComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="input-group mb-3 input-group-lg">
                    <input type="text" className="form-control" placeholder="Enter new ToDo"></input>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-success">+</button>
                    </div>
                </div>

            </div>
    );
    }
}