import React from 'react'

export default class ListItemComponent extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="New Todo Text" />
            </form>
        );
    }
}