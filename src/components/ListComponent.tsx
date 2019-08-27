import React from 'react'
import ListItemComponent from "./ListItemComponent";
import "../App.css"

export default class ListComponent extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><ListItemComponent/></li>
                    <li><ListItemComponent/></li>
                    <li><ListItemComponent/></li>
                </ul>
                </div>
        );
    }
}