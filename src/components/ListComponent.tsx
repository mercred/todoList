import React from 'react'
import ListItemComponent from "./ListItemComponent";
import "../App.css"
import AddTodoComponent from "./AddTodoComponent";
interface IState {
    todos:any;
}
interface IProps {
}



export default class ListComponent extends React.Component<IProps,IState> {
    state={
        todos:[]
    }
    addTodo= (todo: Object)=>{
        this.setState({todos:[todo,...this.state.todos]});

    }
    render() {

        return (
                <div>
                    <AddTodoComponent onSubmit={this.addTodo}/>
                    {JSON.stringify(this.state.todos)}
                    <div>
                        <ul>
                            <li><ListItemComponent/></li>
                            <li><ListItemComponent/></li>
                            <li><ListItemComponent/></li>
                        </ul>
                        </div>
                </div>
        );
    }
}