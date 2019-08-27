import React from 'react'
import "../App.css"


export default class ListItemComponent extends React.Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"
                               className="my_checkbox"></input>
                    </div>
                </div>
                <input type="text" className="form-control todoTextInput" aria-label="Text input with checkbox"
                       defaultValue="Jump from the bridge" ></input>
                <div className="input-group-append">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
}