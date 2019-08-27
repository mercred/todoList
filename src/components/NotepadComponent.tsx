import AddTodoComponent from "./AddTodoComponent";
import ListComponent from "./ListComponent";
import React from "react";
interface IState {

}

interface IProps {
    nextId?: number;
    todosNotepad:Array<object>;

}
//TODO:REMOVE CLASS LATER
export default class NotepadComponent extends React.Component<IProps, IState> {

    render() {
        return (
            <div>


    </div>
        );
    }
}
