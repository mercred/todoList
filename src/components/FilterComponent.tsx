import React from 'react'
import "../App.css"

export default class FilterComponent extends React.Component {
    render() {
        return (

                <div id="radioBtn" className="btn-group-vertical btn-group-lg">
                    <a className="btn btn-primary active" id='all'>All</a>
                    <a className="btn btn-primary notActive" id='completed'>Completed</a>
                    <a className="btn btn-primary notActive" id='inProgress'>In-Progress</a>
                </div>

        );
    }
}